import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

import Styles from './DataTable.module.css'
import filmesJson from '../../data/filmes.json' 

export default function DataTableMovies() {
    let filmeVazio = {
        id: null,
        nome: '',
        faixaEtaria: '',
        status: 'Habilitado',
    };

    const [filmes, setFilmes] = useState(null);
    const [selectedCity, setSelectedCity] = useState('saoPaulo');

    const [movieDialog, setmovieDialog] = useState(false);
    const [deletemovieDialog, setDeletemovieDialog] = useState(false);
    const [deletemoviesDialog, setDeletemoviesDialog] = useState(false);
    const [filme, setFilme] = useState(filmeVazio);
    const [selectedmovies, setSelectedmovies] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        if (selectedCity in filmesJson) {
            setFilmes(filmesJson[selectedCity]);
        }
    }, [selectedCity]);

    const handleCityChange = (city) => {
        setSelectedCity(city);
    }

    const openNew = () => {
        setFilme(filmeVazio);
        setSubmitted(false);
        setmovieDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setmovieDialog(false);
    };

    const hideDeletemovieDialog = () => {
        setDeletemovieDialog(false);
    };

    const hideDeletemoviesDialog = () => {
        setDeletemoviesDialog(false);
    };

    const savemovie = () => {
        setSubmitted(true);

        if (filme.titulo.trim()) {
            let _filmes = [...filmes];
            let _filme = { ...filme };

            if (filme.id) {
                const index = findIndexById(filme.id);

                _filme[index] = _filme;
                toast.current.show({ severity: 'sucedido', summary: 'Bem-sucedido', detail: 'Filme atualizado', life: 3000 });
            } else {
                _filme.id = createId();
                _filmes.push(_filme);
                toast.current.show({ severity: 'sucedido', summary: 'Bem-sucedido', detail: 'Filme adicionado', life: 3000 });
            }

            setFilmes(_filmes);
            setmovieDialog(false);
            setFilme(filmeVazio);
        }
    };

    const editFilme = (filme) => {
        setFilme({ ...filme });
        setmovieDialog(true);
    };

    const confirmDeletemovie = (filme) => {
        setFilme(filme);
        setDeletemovieDialog(true);
    };

    const statusEditor = (options) => {
        return (
            <InputText 
                value={options.value} 
                onChange={(e) => options.editorCallback(e.target.value)} />
        );
    };    

    const deletemovie = () => {
        let _filmes = filmes.filter((val) => val.id !== filme.id);

        setFilmes(_filmes);
        setDeletemovieDialog(false);
        setFilme(filmeVazio);
        toast.current.show({ severity: 'success', summary: 'bem-sucedido', detail: 'Filme deletado', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeletemoviesDialog(true);
    };

    const deleteSelectedmovies = () => {
        let _filmes = filmes.filter((val) => !selectedmovies.includes(val));

        setFilmes(_filmes);
        setDeletemoviesDialog(false);
        setSelectedmovies(null);
        toast.current.show({ severity: 'success', summary: 'Bem-sucedido', detail: 'Filmes deletados', life: 3000 });
    };

    const onInputChange = (e, titulo) => {
        const val = (e.target && e.target.value) || '';
        let _filme = { ...filme };

        _filme[`${titulo}`] = val;

        setFilme(_filme);
    };

    const onInputNumberChange = (e, titulo) => {
        const val = e.value || 0;
        let _filme = { ...filme };

        _filme[`${titulo}`] = val;

        setFilme(_filme);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Adicionar" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Excluir" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedmovies || !selectedmovies.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Exportar" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editFilme(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeletemovie(rowData)} />
            </React.Fragment>
        );
    };

    const getSeverity = (filme) => {
        switch (filme.status) {
            case 'Habilitado':
                return 'success';

            case 'Desabilitado':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Gestão do catálogo - {selectedCity}</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Pesquisar..." />
            </IconField>
        </div>
    );
    const movieDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Salvar" icon="pi pi-check" onClick={savemovie} />
        </React.Fragment>
    );
    const deletemovieDialogFooter = (
        <React.Fragment>
            <Button label="Não" icon="pi pi-times" outlined onClick={hideDeletemovieDialog} />
            <Button label="Sim" icon="pi pi-check" severity="danger" onClick={deletemovie} />
        </React.Fragment>
    );
    const deletemoviesDialogFooter = (
        <React.Fragment>
            <Button label="Não" icon="pi pi-times" outlined onClick={hideDeletemoviesDialog} />
            <Button label="Sim" icon="pi pi-check" severity="danger" onClick={deleteSelectedmovies} />
        </React.Fragment>
    );

    return (
        <div>

            <nav className={Styles.navBar}>
                <div className={Styles.citySelect}>
                    <label htmlFor="city">Selecione a unidade: </label>
                    <select id="city" onChange={(e) => handleCityChange(e.target.value)}>
                        <option value="saoPaulo">Unidades</option>
                        <option value="saoPaulo">São Paulo</option>
                        <option value="niteroi">Niterói</option>
                    </select>
                </div>
            </nav>
            <Toast ref={toast} />

            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable 
                    ref={dt} 
                    value={filmes} 
                    selection={selectedmovies} 
                    onSelectionChange={(e) => setSelectedmovies(e.value)}
                    dataKey="id"  
                    paginator 
                    rows={5} 
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} movies" 
                    globalFilter={globalFilter} 
                    header={header}>
                    
                    <Column selectionMode="multiple" exportable={false}></Column>
                    
                    <Column field="code" header="Código" sortable style={{ minWidth: '10rem' }}></Column>
                    
                    <Column field="titulo" header="Titulo" sortable style={{ minWidth: '16rem' }}></Column>
                    
                    <Column field="status" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                    
                    <Column field="faixaEtaria" header="Classificação" sortable style={{ minWidth: '10rem'}}></Column>

                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog 
                visible={movieDialog} 
                style={{ width: '32rem' }} 
                breakpoints={{ '960px': '75vw', '641px': '90vw' }} 
                header="Detalhes do filme" 
                modal 
                className="p-fluid" 
                footer={movieDialogFooter} 
                onHide={hideDialog}>
                
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Nome
                    </label>
                    <InputText 
                        id="titulo" 
                        value={filme.titulo} 
                        onChange={(e) => onInputChange(e, 'titulo')} 
                        required 
                        autoFocus 
                        className={classNames({ 'p-invalid': submitted && !filme.titulo})} />
                    {submitted && !filme.titulo&& <small className="p-error">Nome é obrigatório</small>}
                </div>
                
                <div className="field">
                    <label htmlFor="status" className="font-bold">
                        Status
                    </label>
                    <select
                        id="status"
                        value={filme.status}
                        onChange={(e) => onInputChange(e, 'status')}
                        required
                        editor={(options) => statusEditor(options)}
                        className={classNames({ 'p-invalid': submitted && !filme.status })}
                        style={{display: 'flex', padding: '0.5rem', outline: 'none',}}
                    >
                        <option value="">Selecione o status</option>
                        <option value="Habilitado">Habilitado</option>
                        <option value="Desabilitado">Desabilitado</option>
                    </select>
                    {submitted && !filme.status && (
                        <small className="p-error">Status é obrigatório</small>
                    )}
                </div>


                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="faixaEtaria" className="font-bold">
                            Classificação etária
                        </label>
                        <InputNumber 
                            id="faixaEtaria" 
                            value={filme.faixaEtaria} 
                            onValueChange={(e) => onInputNumberChange(e, 'faixaEtaria')}/>
                        {submitted && !filme.faixaEtaria && <small className="p-error">Faixa etária é obrigatória</small>}
                    </div>
                </div>
            </Dialog>

            <Dialog 
                visible={deletemovieDialog} 
                style={{ width: '32rem' }} 
                breakpoints={{ '960px': '75vw', '641px': '90vw' }} 
                header="Confirmar exclusão" 
                modal 
                footer={deletemovieDialogFooter} 
                onHide={hideDeletemovieDialog}>
                
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {filme && (
                        <span>
                            Você tem certeza que deseja excluir o item <b>{filme.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog 
                visible={deletemoviesDialog} 
                style={{ width: '32rem' }} 
                breakpoints={{ '960px': '75vw', '641px': '90vw' }} 
                header="Confirmar exclusões" 
                modal 
                footer={deletemoviesDialogFooter} 
                onHide={hideDeletemoviesDialog}>
                
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {filme && <span>Você tem certeza que deseja excluir?</span>}
                </div>
            </Dialog>
        </div>
    );
}
        