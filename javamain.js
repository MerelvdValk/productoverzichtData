AOS.init({
    duration: 1300
});

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);


    axios.get('http://localhost:3000/projecten').then(resp => {
        const projecten = resp.data;
        const projectenHtml = []

        for (const project of projecten) {
            projectenHtml.push(`                
                                <div class="projectview">
                                    <div class="firstcolumn" >${project.Start}</div>
                                    <div class="secondcolumn">${project.Eind}</div>
                                    <a class="thirdcolumn" href="detailproject.html">${project.Projectnaam}</a>
                                    <div class="fourthcolumn">${project.Skills}</div>
                                    <div class="fifthcolumn">
                                        <a class="fas fa-external-link-alt fa-lg" href="${project.Link}" target="_blank"></a>
                                    </div>
                                </div>
                                `
            )
        }
        $('#container_projects').html(projectenHtml.join('\n'));
    });
});