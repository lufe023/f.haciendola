import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getUsersThisMonth from '../utils/getUsersThisMonth';
import getUsersToday from '../utils/getUsersToday';
import getUsersAnyMonth from '../utils/getUsersAnyMonth'
import getUsersSinceSevenDays from '../utils/getUsersSinceSevenDays';

const MiniCards = () => {

  let miniCardsData = useSelector(state => state.dashboardSlice)
  
  const dispatch = useDispatch();
  useEffect(() => {
    getUsersThisMonth(dispatch)
    getUsersToday(dispatch)
    getUsersSinceSevenDays(dispatch)
    getUsersAnyMonth(dispatch,1)

  }, [])

  return (
    <div className="row">
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card" style={{minHeight:"150px"}}>
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                  <h5 className="font-weight-bolder">
                    $53,000
                  </h5>
                  <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">+55%</span>
                    since yesterday
                  </p>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                  <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card" style={{minHeight:"150px"}}>
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
              <div className="numbers">
              <p className="text-sm mb-0 text-uppercase font-weight-bold">Usuarios Hoy</p>
              <h5 className="font-weight-bolder">
                {miniCardsData.usersToday.length}
              </h5>
              <p className="mb-0">
                {(() => {
                  const diferencia = miniCardsData.usersToday.length - miniCardsData.usersSinceSevenDay.length;
                  let diferenciaText = '';
                  let className = 'text-success';

                  if (diferencia > 0) {
                    diferenciaText = `${diferencia}+`;
                  } else if (diferencia < 0) {
                    diferenciaText = `${Math.abs(diferencia)}-`;
                    className = 'text-danger';
                  } else {
                    diferenciaText = 'Igual';
                  }

                  return (
                    <>
                      <span className={`${className} text-sm font-weight-bolder`}>
                        {diferenciaText}
                      </span>
                      &nbsp;&nbsp; que la semana pasada
                    </>
                  );
                })()}
              </p>
            </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                  <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card" style={{minHeight:"150px"}}>
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-uppercase font-weight-bold">Clientes este mes</p>
                  <h5 className="font-weight-bolder">
                    {miniCardsData.usersThisMonth.length}
                  </h5>
                  <p className="mb-0">
  {miniCardsData.usersThisMonth.length > 0 && miniCardsData.usersLastMonth.length > 0 ? (
    <>
      <span className={`${miniCardsData.usersLastMonth.length > miniCardsData.usersThisMonth.length ? 'text-danger' : 'text-success'} text-sm font-weight-bolder`}>
        {miniCardsData.usersLastMonth.length > miniCardsData.usersThisMonth.length ? '-' : '+'}
        {((miniCardsData.usersLastMonth.length * 100) / miniCardsData.usersThisMonth.length).toFixed(2)} % 
      </span>
      &nbsp;&nbsp;que el mes pasado
    </>
  ) : miniCardsData.usersThisMonth.length === 0 && miniCardsData.usersLastMonth.length > 0 ? (
    <span className="text-danger text-sm font-weight-bolder">
     &nbsp;&nbsp; -100% que el mes pasado
    </span>
  ) : miniCardsData.usersThisMonth.length > 0 && miniCardsData.usersLastMonth.length === 0 ? (
    <span className="text-success text-sm font-weight-bolder">
     &nbsp;&nbsp; +100% que el mes pasado
    </span>
  ) : (
    <span className="text-warning text-sm font-weight-bolder">
     &nbsp;&nbsp; Sin datos suficientes para comparar
    </span>
  )}
</p>

                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                  <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card" style={{minHeight:"150px"}}>
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                  <h5 className="font-weight-bolder">
                    $103,430
                  </h5>
                  <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                  </p>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                  <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCards