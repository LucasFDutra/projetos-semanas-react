import React from 'react';

const InfoSeries = (data) => {
  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <header style={masterHeader}>
        <div className='h-100 container' style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='row h-100 align-items-center'>
            <div className='col-3'>
              <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster} />
            </div>
            <div className='col-8'>
              <h1 className='font-weight-light text-white'>{data.name}</h1>
              <div className='lead text-white'>
                {data.status === 'ASSISTIDO' && (
                  <span className='badge badge-success' style={{ margin: '5px' }}>
                    Assistido
                  </span>
                )}
                {data.status === 'PARA_ASSISTIR' && (
                  <span className='badge badge-warning' style={{ margin: '5px' }}>
                    Para Assistir
                  </span>
                )}
                <span className='badge badge-primary' style={{ margin: '5px' }}>
                  {data.genre}
                </span>
                <div>{data.comments}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default InfoSeries;
