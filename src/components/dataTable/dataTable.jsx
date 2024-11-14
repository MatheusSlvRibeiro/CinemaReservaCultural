import React, { useState, useEffect, useRef } from 'react';
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

export default function OnShow({ cidade, localMovies }) {
      let emptyMovie = {
            id: null,
            titulo: '',
            faixaEtaria: null,
      };

      const [movies, setMovies] = useState(null);
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
            setMovies(localMovies);
      }, [cidade, localMovies]);

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

      const saveProduct = () => {
            setSubmitted(true);

            if (movie.titulo.trim()) {
                  let _movies = [...movies];
                  let _movie = { ...movie };

                  if (movie.id) {
                  const index = findIndexById(movie.id);

                  _movies[index] = _movie;
                  toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filme Atualizado', life: 3000 });
                  } else {
                  _movie.id = createId();
                  _movies.push(_movie);
                  toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filme Atualizado', life: 3000 });
                  }

                  setMovies(_movies);
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

      const deleteProduct = () => {
            let _movies = movies.filter((val) => val.id !== movie.id);

            setMovies(_movies);
            setDeleteMovieDialog(false);
            setMovie(emptyMovie);
            toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filme Deletado', life: 3000 });

      const findIndexById = (id) => {
            let index = -1;

            for (let i = 0; i < movies.length; i++) {
                  if (movies[i].id === id) {
                  index = i;
                  break;
                  }
            }

            return index;
      };

      const createId = () => {
            const timestamp = Date.now().toString(36);
            const randomValue = Math.floor(Math.random() * 1000).toString(36);
        
            return `${timestamp}${randomValue}`;
      };

      const confirmDeleteSelected = () => {
            setDeleteMoviesDialog(true);
      };

      const deleteSelectedMovies = () => {
            let _movies = movies.filter((val) => !selectedMovies.includes(val));

            setMovies(_movies);
            setDeleteMoviesDialog(false);
            setSelectedMovies(null);
            toast.current.show({ severity: 'success', summary: 'Concluído', detail: 'Filmes deletados', life: 3000 });
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
                  <Button label="Novo" icon="pi pi-plus" severity="success" onClick={openNew} />
                  <Button label="Deletar" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedMovies || !selectedMovies.length} />
                  </div>
            );
      };

      const actionBodyTemplate = (rowData) => {
            return (
                  <React.Fragment>
                  <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                  <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
                  </React.Fragment>
            );
      };

      const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                  <h4 className="m-0">Gestão de catálago</h4>
                  <IconField iconPosition="left">
                  <InputIcon className="pi pi-search" />
                  <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Procurar..." />
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
                  <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>

                  <DataTable ref={dt} value={movies} selection={selectedMovies} onSelectionChange={(e) => setSelectedMovies(e.value)}
                              dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
                              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                              currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} filmes" globalFilter={globalFilter} header={header}>
                        <Column selectionMode="multiple" exportable={false}></Column>
                        <Column field="id" header="ID" style={{ minWidth: '12rem' }}></Column>
                        <Column field="titulo" header="Titulo" style={{ minWidth: '16rem' }}></Column>
                        <Column field="faixaEtaria" header="Categoria" style={{ minWidth: '10rem' }}></Column>
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                  </DataTable>
                  </div>

                  <Dialog visible={movieDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Detalhes do filme" modal className="p-fluid" footer={movieDialogFooter} onHide={hideDialog}>
                  
                  <div className="field">
                        <label htmlFor="titulo" className="font-bold">
                              Nome
                        </label>
                        <InputText id="titulo" value={movie.titulo} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !movie.titulo })} />
                        {submitted && !movie.titulo && <small className="p-error">o Titulo é obrigatório</small>}
                  </div>

                  <div className="field">
                        <label className="mb-3 font-bold">Classificação</label>
                        <div className="formgrid grid">
                              <div className="field-radiobutton col-6">
                              <RadioButton inputId="category1" name="category" value="Livre" onChange={onCategoryChange} checked={movie.faixaEtaria === 'Livre'} />
                              <label htmlFor="category1">Livre</label>
                              </div>
                              <div className="field-radiobutton col-6">
                              <RadioButton inputId="category2" name="category" value="10" onChange={onCategoryChange} checked={movie.faixaEtaria === '10'} />
                              <label htmlFor="category2">10 anos</label>
                              </div>
                              <div className="field-radiobutton col-6">
                              <RadioButton inputId="category3" name="category" value="12" onChange={onCategoryChange} checked={movie.faixaEtaria === '12'} />
                              <label htmlFor="category3">12 anos</label>
                              </div>
                              <div className="field-radiobutton col-6">
                              <RadioButton inputId="category4" name="category" value="14" onChange={onCategoryChange} checked={movie.faixaEtaria === '14'} />
                              <label htmlFor="category4">14 anos</label>
                              </div>
                              <div className="field-radiobutton col-6">
                              <RadioButton inputId="category5" name="category" value="16" onChange={onCategoryChange} checked={movie.faixaEtaria === '16'} />
                              <label htmlFor="category5">16 anos</label>
                              </div>
                              <div className="field-radiobutton col-6">
                              <RadioButton inputId="category6" name="category" value="18" onChange={onCategoryChange} checked={movie.faixaEtaria === '18'} />
                              <label htmlFor="category6">18 anos</label>
                              </div>
                        </div>
                  </div>
                  </Dialog>

                  <Dialog visible={deleteMovieDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirmar exclusão" modal footer={deleteMovieDialogFooter} onHide={hideDeleteMovieDialog}>
                  <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {movie && (
                              <span>
                              Você tem certeza que deseja deletar os filmes selecionados? <b>{movie.titulo}</b>?
                              </span>
                        )}
                  </div>
                  </Dialog>

                  <Dialog visible={deleteMoviesDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirmar exclusão" modal footer={deleteMoviesDialogFooter} onHide={hideDeleteMoviesDialog}>
                  <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {movie && <span>Você tem certeza que deseja deletar os filmes selecionados?</span>}
                  </div>
                  </Dialog>
            </div>
      );
      };
}