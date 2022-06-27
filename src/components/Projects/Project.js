const Project = ({ data }) => {
    const handleClick = (e) => {
        e.target.classList.contains('github-logo') ? window.open(data.repo, "_self") : window.open(data.site, "_self")
    }
    
    return (
        <div onClick={handleClick} className="col-10 col-md-5 col-xl-4 col-xxl-3 project" style={{ backgroundImage: 'url('+data.img+')', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            {data.release === false ? 
                <div className="cover">
                    <h3>{data.name}</h3>
                    <h4 style={{color: "#00aaff", textDecoration: "underline"}}>{data.releaseDate}</h4>
                </div>
                :
                <h3>{data.name}</h3>
            }
            <img onClick={handleClick} className='github-logo' src='imgs/R.png' alt='github' style={{width: "50px"}} />
        </div>
    )
}

export default Project