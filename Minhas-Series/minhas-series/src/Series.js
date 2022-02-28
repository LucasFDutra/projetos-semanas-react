import React, { useState, useEffect } from 'react';
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import NovaSerie from './NovaSerie';
import InfoSeries from './InfoSeries';

const Series = () => {
  const [data, setData] = useState([]);
  const [gen, setGen] = useState([]);

  useEffect(() => {
    axios.get('/api/series').then((res) => {
      setData(res.data.data);
    });
    axios.get('/api/genres').then((res) => {
      setGen(res.data.data);
    });
  }, []);

  const deleteSerie = (id) => {
    // eslint-disable-next-line no-unused-vars
    axios.delete(`/api/series/${id}`).then((res) => {
      const filtrado = data.filter(item => item.id !== id);
      setData(filtrado);
    });
    // eslint-disable-next-line no-unused-vars
    axios.delete(`/api/genres/${id}`).then((res) => {
      const filtrado = gen.filter(item => item.id !== id);
      setGen(filtrado);
    });
  };

  console.log(gen);
  console.log(data);

  // eslint-disable-next-line arrow-body-style
  const renderizaLinha = (record) => {
    return (
      <div key={record.id}>
        <div>
          <table className='table table-dark table-hover table-bordered'>
            <tbody>
              <tr>
                <th scope='row' style={{ textAlign: 'center' }}>
                  {record.id}
                </th>
                <td style={{ textAlign: 'center' }}>{record.name}</td>
                <td style={{ textAlign: 'center' }}>
                  <button
                    className='btn btn-danger'
                    style={{ margin: '5px' }}
                    type='button'
                    onClick={() => deleteSerie(record.id)}
                  >
                    Remove
                  </button>
                  <button
                    className='btn btn-info'
                    id={`id_${record.id}`}
                    style={{ margin: '5px' }}
                    type='button'
                  >
                    Info
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <UncontrolledCollapse toggler={`#id_${record.id}`}>
            <CardBody>
              <Card>{InfoSeries(record)}</Card>
            </CardBody>
          </UncontrolledCollapse>
        </div>
      </div>
    );
  };

  return (
    <div className='container'>
      <h1>Séries</h1>
      <button
        className='btn btn-primary'
        style={{ margin: '5px' }}
        id='toggler_novaSerie'
        type='button'
      >
        Nova Série
      </button>
      <UncontrolledCollapse toggler='#toggler_novaSerie'>
        <CardBody>
          <Card>
            <NovaSerie />
          </Card>
        </CardBody>
      </UncontrolledCollapse>
      {data.map(d => renderizaLinha(d))}
      {/* {data.map(renderizaLinha)} // da na mesma */}
    </div>
  );
};

export default Series;
