// renders header to DOM

// const eventHub = document.querySelector("body")

export const Header = () => {
    const contentTarget = document.querySelector("header")

    contentTarget.innerHTML = `
    <section id="headerBranding">
            <div id="logoContainer">
                <img src="/img/ag-logo_clr.png" alt="Aaron Gertler logo">
            </div>

            <div>
                <h1>aaronGertler</h1>
                <h2>// Web Dev Journal</h2>
            </div>
        </section>

        <section id="dateTimeSocial">
            <div id="dateTime">
                <p id="date"></p>
                <p id="time"></p>
            </div>

            <div id="socialIcons">
                <a href="https://github.com/asgertler" target="_blank">
                    <img src="/img/icon-github.png" alt="GitHub Icon">
                </a>
                <a href="https://www.instagram.com/tidaltown/" target="_blank">
                    <img src="/img/icon-instagram.png" alt="Instagram Icon">
                </a>

                <a href="https://www.linkedin.com/in/asgertler/" target="_blank">
                    <img src="/img/icon-linkedin.png" alt="Linkedin Icon">
                </a>
            </div>
        </section>
    `

    const updateDateTime = () => {
        let now = new Date()

        let date = now.getDay() + '.' + now.getMonth() + '.' + now.getFullYear().toString().substr(-2)
        document.getElementById('date').innerHTML = date

        let time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
        document.getElementById('time').innerHTML = time

        setTimeout(updateDateTime, 1000)
    }
    updateDateTime()
}