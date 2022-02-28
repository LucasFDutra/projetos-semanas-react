import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NovaSerie = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('PARA_ASSISTIR');
  const [genre, setGenre] = useState('');
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/series').then((res) => {
      setData(res.data.data);
    });
  }, []);

  const onChange = label => (env) => {
    if (label === 'name') {
      setName(env.target.value);
    } else if (label === 'status') {
      setStatus(env.target.value);
    } else if (label === 'genre') {
      setGenre(env.target.value);
    } else if (label === 'comment') {
      setComment(env.target.value);
    }
  };
  const save = () => {
    const novoId = data[data.length - 1].id + 1; //ta dando errado
    axios.post('/api/series', {
      name,
      status,
      genre_id: novoId,
    });
    axios.post('/api/genres', {
      name: genre,
    });
  };

  return (
    <div className='container'>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome da Série</label>
          <input
            type='text'
            className='form-control'
            placeholder='Nome da Série'
            value={name}
            id='name'
            onChange={onChange('name')}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='genero'>Gênero da Série</label>
          <input
            type='text'
            className='form-control'
            placeholder='Gênero da Série'
            value={genre}
            onChange={onChange('genre')}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='comentario'>Comentário da Série</label>
          <input
            type='text'
            className='form-control'
            placeholder='Comentário da Série'
            value={comment}
            onChange={onChange('comment')}
          />
        </div>

        <div className='custom-control custom-radio'>
          <input
            className='custom-control-input'
            type='radio'
            name='status'
            id='assistido'
            value='ASSISTIDO'
            onChange={onChange('status')}
          />
          <label className='custom-control-label' htmlFor='assistido'>
            Assistido
          </label>
        </div>
        <div className='custom-control custom-radio'>
          <input
            className='custom-control-input'
            type='radio'
            name='status'
            id='paraAssistir'
            value='PARA_ASSISTIR'
            onChange={onChange('status')}
          />
          <label className='custom-control-label' htmlFor='paraAssistir'>
            Para Assistir
          </label>
        </div>
        {status === 'ASSISTIDO' && (
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <div className='custom-control custom-radio custom-control-inline'>
              <input
                className='custom-control-input'
                type='radio'
                name='nota'
                id='nota_1'
                value='1'
              />
              <label className='custom-control-label' htmlFor='nota_1'>
                1
              </label>
            </div>
            <div className='custom-control custom-radio custom-control-inline'>
              <input
                className='custom-control-input'
                type='radio'
                name='nota'
                id='nota_2'
                value='2'
              />
              <label className='custom-control-label' htmlFor='nota_2'>
                2
              </label>
            </div>
            <div className='custom-control custom-radio custom-control-inline'>
              <input
                className='custom-control-input'
                type='radio'
                name='nota'
                id='nota_3'
                value='3'
              />
              <label className='custom-control-label' htmlFor='nota_3'>
                3
              </label>
            </div>
            <div className='custom-control custom-radio custom-control-inline'>
              <input
                className='custom-control-input'
                type='radio'
                name='nota'
                id='nota_4'
                value='4'
              />
              <label className='custom-control-label' htmlFor='nota_4'>
                4
              </label>
            </div>
            <div className='custom-control custom-radio custom-control-inline'>
              <input
                className='custom-control-input'
                type='radio'
                name='nota'
                id='nota_5'
                value='5'
              />
              <label className='custom-control-label' htmlFor='nota_5'>
                5
              </label>
            </div>
          </div>
        )}
        <button type='button' className='btn btn-primary' style={{ margin: '5px' }} onClick={save}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NovaSerie;
