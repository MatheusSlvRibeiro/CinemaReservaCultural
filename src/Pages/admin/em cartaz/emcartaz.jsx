import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import Styles from './emcartaz.module.css'; 
import filmesJson from '../../../data/filmes.json';

export default function FilmesAdmin() {
    const [filmes, setFilmes] = useState([]);
    const [statuses] = useState(['Habilitado', 'Desabilitado']);
    const [selectedCity, setSelectedCity] = useState('saoPaulo');

    useEffect(() => {
        if (selectedCity in filmesJson) {
            setFilmes(filmesJson[selectedCity]);
        }
    }, [selectedCity]);

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    const getSeverity = (value) => {
        switch (value) {
            case 'Habilitado':
                return 'success';
            case 'Desabilitado':
                return 'danger';
            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _filmes = [...filmes];
        let { newData, index } = e;

        _filmes[index] = newData;
        setFilmes(_filmes);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Selecione o Status"
                itemTemplate={(option) => <Tag value={option} severity={getSeverity(option)} />}
            />
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    return (
        <div className="card p-fluid">
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

            <DataTable 
                value={filmes} 
                editMode="row" 
                dataKey="titulo" 
                onRowEditComplete={onRowEditComplete} 
                tableStyle={{ minWidth: '50rem' }}>
                
                    <Column 
                        field="titulo" 
                        header="Título" 
                        editor={(options) => textEditor(options)} 
                        style={{ width: '40%' }} />

                    <Column 
                        field="faixaEtaria" 
                        header="Faixa Etária" 
                        editor={(options) => textEditor(options)} 
                        style={{ width: '20%' }} />
                
                    <Column 
                        field="status" 
                        header="Status" 
                        body={statusBodyTemplate} 
                        editor={(options) => statusEditor(options)} 
                        style={{ width: '20%' }} />
                
                    <Column 
                        rowEditor 
                        headerStyle={{ width: '10%' }} 
                        bodyStyle={{ textAlign: 'center' }} />
            </DataTable>
        </div>
    );
}
