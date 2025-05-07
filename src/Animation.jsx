function Animation() {

    let left = 8
    return (
        <div>
            <div className="cube">
                {[...Array(10)].map((_, i) => {
                    const style = { left: `${left}%` };
                    left += 17;
                    return (
                        <div className={`cube__${i+1}`} key={i} style={style}>
                            <div className={`cube__run__${i+1}`}></div>
                        </div>
                    )    
                })}
            </div>
        </div>
    )
}

export default Animation
