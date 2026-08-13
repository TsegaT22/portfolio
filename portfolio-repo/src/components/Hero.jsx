function Hero(){
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-intro">Hi, my name is</p>
                <h1>Tsega Takele</h1>
                <h2>Software Engineer & Computer Science Graduate</h2>

                <p className="hero-description">
                    I build full-stack web applications using technologies such as React,
                    Java, Spring Boot, Node.js, Express, MySQL, and PostgreSQL.
                    I enjoy solving technical problems and creating applications that are
                    practical and user-friendly. I am passionate about learning new technologies
                     and improving my skills as a software engineer. 
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="https://github.com/TsegaT22" className="btn btn-secondary" 
                        target="_blank"
                        rel= "noreferrer"
                        className="secondary-button">View GitHub Profile
                    </a>
                </div>
            </div>
            </section>
    )
}
export default Hero