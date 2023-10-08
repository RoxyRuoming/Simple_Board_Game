function History({ history, onChange}) {
    const historyItems = history.map((item, index) => {
        return (
            <li className="history-item" onClick={() => onChange(index)}> 
                This is step {index + 1}
            </li>
        )
    });

    return (
        <div>
            <h2 className="history-title">History</h2>
            <ul className="history-list"> {historyItems} </ul>;
        </div>)
}

export default History;