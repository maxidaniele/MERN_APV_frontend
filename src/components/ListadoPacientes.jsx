import PacientesContext from '../context/PacientesProvider';
import usePacientes from '../hooks/usePacientes';
import Paciente from './Paciente';

const ListadoPacientes = () => {

  const { pacientes } = usePacientes()

    return (
      <>
        { pacientes.length ? 
        (
          <>
                <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

                <p className='text-center py-3'>
                  Admanistra tus {''}
                  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                </p>
                {pacientes.map(paciente => (
                <Paciente
                  key={paciente._id}
                  paciente={paciente}
                />
              ))}        
          </>
        ): 
        (
          <>
              <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>

              <p className='text-center py-3'>
                Comienza agregando pacientes {''}
                <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
              </p>
          </>
        ) }
      </>
    )
  }
  
  export default ListadoPacientes