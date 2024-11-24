import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios'; 
import './dataTable.css';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton } from 'primereact/radiobutton';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

export default function OnShow({ cidade}) {
      let emptyMovie = {
            id: null,
            titulo: '',
            faixaEtaria: null,
      };

      const [movies, setMovies] = useState([]);
      const [movieDialog, setMovieDialog] = useState(false);
      const [deleteMovieDialog, setDeleteMovieDialog] = useState(false);
      const [deleteMoviesDialog, setDeleteMoviesDialog] = useState(false);
      const [movie, setMovie] = useState(emptyMovie);
      const [selectedMovies, setSelectedMovies] = useState(null);
      const [submitted, setSubmitted] = useState(false);
      const [globalFilter, setGlobalFilter] = useState(null);
      const toast = useRef(null);
      const dt = useRef(null);

      useEffect(() => {
            const fetchMovies = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/filmes/${cidade}`);
                    setMovies(response.data); 
                } catch (error) {
                    console.error("Erro ao buscar filmes:", error);
                }
            };
        
            fetchMovies();
        }, [cidade]);
        

      const openNew = () => {
            setMovie(emptyMovie);
            setSubmitted(false);
            setMovieDialog(true);
      };

      const hideDialog = () => {
            setSubmitted(false);
            setMovieDialog(false);
      };

      const hideDeleteMovieDialog = () => {
            setDeleteMovieDialog(false);
      };

      const hideDeleteMoviesDialog = () => {
            setDeleteMoviesDialog(false);
      };

      const saveProduct = async () => {
            setSubmitted(true);
        
            if (movie.titulo.trim()) {
                let _movies = [...movies];
                let _movie = { ...movie };
        
                if (movie.id) {

                  try {
                        await axios.put(`http://localhost:5000/filmes/${cidade}/${movie.id}`, _movie);
                        const updatedMovies = _movies.map(m => m.id === movie.id ? _movie : m);
                        setMovies(updatedMovies);
                        toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filme Atualizado', life: 3000 });
                    } catch (error) {
                        console.error("Erro ao atualizar filme:", error);
                    }
                } else {

                  try {
                        const response = await axios.post(`http://localhost:5000/filmes/${cidade}`, _movie);
                        _movie.id = response.data.id; 
                        setMovies([..._movies, _movie]);
                        toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filme Adicionado', life: 3000 });
                    } catch (error) {
                        console.error("Erro ao adicionar filme:", error);
                    }
                }
        
                setMovieDialog(false);
                setMovie(emptyMovie);
            }
      };

      const editProduct = (movie) => {
            setMovie({ ...movie });
            setMovieDialog(true);
      };

      const confirmDeleteProduct = (movie) => {
            setMovie(movie);
            setDeleteMovieDialog(true);
      };

      const deleteProduct = async () => {
            try {
                await axios.delete(`http://localhost:5000/filmes/${cidade}/${movie.id}`);
                let _movies = movies.filter((val) => val.id !== movie.id);
                setMovies(_movies);
                setDeleteMovieDialog(false);
                setMovie(emptyMovie);
                toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filme Deletado', life: 3000 });
            } catch (error) {
                console.error("Erro ao deletar filme:", error);
            }
        };

      const confirmDeleteSelected = () => {
            setDeleteMoviesDialog(true);
      };

      const deleteSelectedMovies = async () => {
            try {
                for (const selectedMovie of selectedMovies) {
                    await axios.delete(`http://localhost:5000/filmes/${cidade}/${selectedMovie.id}`);
                }
                let _movies = movies.filter((val) => !selectedMovies.includes(val));
                setMovies(_movies);
                setDeleteMoviesDialog(false);
                setSelectedMovies(null);
                toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filmes deletados', life: 3000 });
            } catch (error) {
                console.error("Erro ao deletar filmes selecionados:", error);
            }
        };
        

      const onCategoryChange = (e) => {
            let _movie = { ...movie };
            _movie['faixaEtaria'] = e.value;
            setMovie(_movie);
      };

      const onInputChange = (e, titulo) => {
            const val = (e.target && e.target.value) || '';
            let _movie = { ...movie };
            _movie[titulo] = val;
            setMovie(_movie);
      };

      const leftToolbarTemplate = () => {
            return (
                  <div className="flex flex-wrap gap-2">
                        <Button className='p-2 bg-green-500 text-white hover:bg-green-600' label="Novo" icon="pi pi-plus" severity="success" onClick={openNew} />
                        <Button className='p-2 bg-red-500 text-white hover:bg-red-600' label="Deletar" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedMovies || !selectedMovies.length} />
                  </div>
            );
      };

      const actionBodyTemplate = (rowData) => {
            return (
                  <React.Fragment>
                        <Button 
                              icon="pi pi-pencil" 
                              rounded 
                              outlined 
                              severity='info'
                              className="m-1 border-blue-500 text-blue-500 hover:bg-blue-100" 
                              onClick={() => editProduct(rowData)} />
                        <Button 
                              icon="pi pi-trash" 
                              rounded 
                              outlined 
                              severity="danger"
                              className="m-1 border-red-500 text-red-500 hover:bg-red-100" 
                              onClick={() => confirmDeleteProduct(rowData)} />
                  </React.Fragment>
            );
      };

      const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                  <h4 className="m-0 p-2 text-black text-center">Gestão de catálago</h4>
                  <IconField iconPosition="right">
                        <InputIcon className="pi pi-search" />
                        <InputText type="search" className='p-2' onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Procurar..." />
                  </IconField>
            </div>
      );

      const movieDialogFooter = (
            <React.Fragment>
                  <Button label="Cancelar" icon="pi pi-times" outlined onClick={hideDialog} />
                  <Button label="Salvar" icon="pi pi-check" onClick={saveProduct} />
            </React.Fragment>
      );
    
      const deleteMovieDialogFooter = (
            <React.Fragment>
                  <Button label="Não" icon="pi pi-times" outlined onClick={hideDeleteMovieDialog} />
                  <Button label="Sim" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
            </React.Fragment>
      );
    
      const deleteMoviesDialogFooter = (
            <React.Fragment>
                  <Button label="Não" icon="pi pi-times" outlined onClick={hideDeleteMoviesDialog} />
                  <Button label="Sim" icon="pi pi-check" severity="danger" onClick={deleteSelectedMovies} />
            </React.Fragment>
      );

      return (
            <div>
                  <Toast ref={toast} />
                  <div className="card">
                        <Toolbar className="mb-2" left={leftToolbarTemplate}></Toolbar>

                        <DataTable 
                              ref={dt} 
                              value={movies} 
                              selection={selectedMovies} 
                              onSelectionChange={(e) => setSelectedMovies(e.value)}
                              dataKey="id"  
                              paginator 
                              showGridlines
                              rows={5} 
                              rowsPerPageOptions={[5, 10, 25, 50]}
                              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                              currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} filmes " 
                              globalFilter={globalFilter} 
                              header={header}>
                              <Column selectionMode="multiple" exportable={false}></Column>
                              <Column field="id" header="ID" style={{ minWidth: '8rem', padding: '0.5rem' }}></Column>
                              <Column field="titulo" header="Titulo" style={{ minWidth: '16rem' }}></Column>
                              <Column field="faixaEtaria" header="Categoria" style={{ minWidth: '6rem' }}></Column>
                              <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                        </DataTable>
                  </div>

                  <Dialog visible={movieDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Detalhes do filme" modal className="p-fluid" footer={movieDialogFooter} onHide={hideDialog}>
                  
                  <div className="field">
                        <label htmlFor="titulo" className="font-bold p-2">
                              Nome
                        </label>
                        <InputText id="titulo" value={movie.titulo} onChange={(e) => onInputChange(e, 'titulo')} required autoFocus className={classNames({ 'p-invalid': submitted && !movie.titulo })} />
                        {submitted && !movie.titulo && <small className="p-error">o Titulo é obrigatório</small>}
                  </div>

                  <div className="field">
                        <label className="mb-3  font-bold">Classificação</label>
                        <div className="flex">
                              <RadioButton 
                                    inputId="faixaEtaria1" 
                                    name="faixaEtaria" 
                                    value="L" 
                                    onChange={onCategoryChange} 
                                    checked={movie.faixaEtaria === 'L'} />
                              <label 
                                    htmlFor="faixaEtaria1" 
                                    className="mr-2">Livre</label>
                              
                              <RadioButton 
                                    inputId="faixaEtaria2" 
                                    name="faixaEtaria" 
                                    value="10" 
                                    onChange={onCategoryChange} 
                                    checked={movie.faixaEtaria === '10'} />
                              <label 
                                    htmlFor="faixaEtaria2" 
                                    className="mr-2">10 anos</label>

                              <RadioButton 
                                    inputId="faixaEtaria3" 
                                    name="faixaEtaria" 
                                    value="12" 
                                    onChange={onCategoryChange} 
                                    checked={movie.faixaEtaria === '12'} />
                              <label 
                                    htmlFor="faixaEtaria3" 
                                    className="mr-2">12 anos</label>
                              
                              <RadioButton 
                                    inputId="faixaEtaria4" name="faixaEtaria" value="14" onChange={onCategoryChange} checked={movie.faixaEtaria === '14'} />
                              <label htmlFor="faixaEtaria4" className="mr-2">14 anos</label>
                              <RadioButton inputId="faixaEtaria5" name="faixaEtaria" value="16" onChange={onCategoryChange} checked={movie.faixaEtaria === '16'} />
                              <label htmlFor="faixaEtaria5" className="mr-2">16 anos</label>
                              <RadioButton inputId="faixaEtaria6" name="faixaEtaria" value="18" onChange={onCategoryChange} checked={movie.faixaEtaria === '18'} />
                              <label htmlFor="faixaEtaria6" className="mr-2">18 anos</label>
                        </div>
                  </div>

            </Dialog>

            <Dialog visible={deleteMovieDialog} style={{ width: '450px' }} header="Confirmar" modal footer={deleteMovieDialogFooter} onHide={hideDeleteMovieDialog}>
                  <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                        {movie && (
                              <span>
                                    Você tem certeza que deseja excluir o filme <b>{movie.titulo}</b>?
                              </span>
                        )}
                  </div>
            </Dialog>

            <Dialog visible={deleteMoviesDialog} style={{ width: '450px' }} header="Confirmar" modal footer={deleteMoviesDialogFooter} onHide={hideDeleteMoviesDialog}>
                  <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                        {selectedMovies && selectedMovies.length > 0 && (
                              <span>
                                    Você tem certeza que deseja excluir os filmes selecionados?
                              </span>
                        )}
                  </div>
            </Dialog>
      </div>
      );
}
