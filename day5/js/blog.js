let dataBlog = [];

function submitBlog(event) {
  event.preventDefault();

  let title = document.getElementById("inputTitle").value;
  let startdate = document.getElementById("startDate").value;
  let enddate = document.getElementById("endDate").value;
  let content = document.getElementById("inputContent").value;
  let nodeJS = document.getElementById("nodeJS").checked;
  let reactJS = document.getElementById("reactJS").checked;
  let nextJS = document.getElementById("nextJS").checked;
  let typeScript = document.getElementById("typeScript").checked;
  let image = document.getElementById("inputImage").files[0];

  if (title === "") {
    return alert("PLEASE ENTER YOUR TITLE!!");
  } else if (content === "") {
    return alert("PLEASE ENTER THE DESCRIPTION!!");
  } else if (!nodeJS && !reactJS && !nextJS && !typeScript) {
    return alert("PLEASE CHOOSE YOUR TECHNOLOGIES!!");
  } else if (!image) {
    return alert("PLEASE UPLOAD YOUR IMAGE!!");
  }

  if (new Date(enddate) < new Date(startdate)) {
    return alert(
      "E R R O R !!! PLEASE CHECK AGAIN YOUR START DATE AND END DATE!!!!"
    );
  }

  let imageURL = URL.createObjectURL(image);

  dataBlog.push({
    title: title,
    startdate: startdate,
    enddate: enddate,
    content: content,
    image: imageURL,
    technologies: {
      nodeJS: nodeJS,
      reactJS: reactJS,
      nextJS: nextJS,
      typeScript: typeScript,
    },
    duration: calculateDuration(startdate, enddate),
  });

  console.log(dataBlog);

  renderBlog();
}

function calculateDuration(startdate, enddate) {
  let startDate = new Date(startdate);
  let endDate = new Date(enddate);
  let duration = endDate - startDate;
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  return `${days} days`;
}

let countdownInterval;
function startBackwardTimer() {
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const output = document.getElementById("countdown");

  if (isNaN(startDate) || isNaN(endDate)) {
    output.textContent = "Please enter both start date and end date.";
    return;
  }

  if (startDate > endDate) {
    output.textContent = "Start date cannot be after end date.";
    return;
  }

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    const now = new Date();
    let timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      output.textContent = "Time is up!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }, 1000);
}

function renderBlog() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    const project = dataBlog[index];
    contentContainer.innerHTML += `
      <div class="blog-list-items">
        <div class="blog-image">
          <img src="${project.image}" alt="image upload" />
        </div>
        <div class="blog-content">
          <h1>${project.title} - ${new Date(
      project.startdate
    ).getFullYear()}</h1>
          <div class="detail-blog">
            durasi: ${project.duration}
          </div>
          <p class="list-deskripsi">${project.content}</p>
          <div class="logo-tech">
            ${
              project.technologies.nodeJS
                ? '<i class="fa-brands fa-node-js"></i>'
                : ""
            }
            ${
              project.technologies.reactJS
                ? '<i class="fa-brands fa-react"></i>'
                : ""
            }
            ${
              project.technologies.nextJS
                ? '<i class="fa-brands fa-js"></i>'
                : ""
            }
            ${
              project.technologies.typeScript
                ? '<i class="fa-brands fa-vuejs"></i>'
                : ""
            }
          </div>
          <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete" onclick="deleteProject(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
  }
}
function renderBlog() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    const project = dataBlog[index];
    contentContainer.innerHTML += `
      <div class="blog-list-items">
        <div class="blog-image">
          <img src="${project.image}" alt="image upload" />
        </div>
        <div class="blog-content">
          <h1>${project.title} - ${new Date(
      project.startdate
    ).getFullYear()}</h1>
          <div class="detail-blog">
            durasi: ${project.duration}
          </div>
          <p class="list-deskripsi">${project.content}</p>
          <div class="logo-tech">
            ${
              project.technologies.nodeJS
                ? '<i class="fa-brands fa-node-js"></i>'
                : ""
            }
            ${
              project.technologies.reactJS
                ? '<i class="fa-brands fa-react"></i>'
                : ""
            }
            ${
              project.technologies.nextJS
                ? '<i class="fa-brands fa-js"></i>'
                : ""
            }
            ${
              project.technologies.typeScript
                ? '<i class="fa-brands fa-vuejs"></i>'
                : ""
            }
          </div>
          <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete" onclick="deleteProject(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
  }
}
function deleteProject(index) {
  dataBlog.splice(index, 1);
  renderBlog();
}
