const Alerta = ({alerta}) =>{
    return (
        <div className={`${alerta.error ? 'from-red-600 to-red-400' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center p-3 rounded uppercase text-white font-bold text-sm mb-10`}>
            {alerta.msg}
        </div>
    )
};

export default Alerta;