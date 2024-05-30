function submitData(event) {
  // Mencegah form submission default
  event.preventDefault();

  // Mendapatkan nilai dari input
  const inputName = document.getElementById("inputName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPhone = document.getElementById("inputPhone").value;
  const inputSubject = document.getElementById("inputSubject").value;
  const inputMessage = document.getElementById("inputMessage").value;

  // Validasi input
  if (inputName === "") {
    alert("Name harus diisi");
  } else if (inputEmail === "") {
    alert("Email Harus Diisi");
  } else if (inputPhone === "") {
    alert("Phone Number tidak boleh K0s0n9");
  } else if (inputSubject === "") {
    alert("Subject tidak boleh kosong");
  } else if (inputMessage === "") {
    alert("Message tidak boleh kosong");
  } else {
    // Jika semua input valid, log data ke console
    console.log(
      `Name : ${inputName}\nEmail : ${inputEmail}\nPhone : ${inputPhone}\nSubject : ${inputSubject}\nMessage : ${inputMessage}`
    );

    // Mengirim email
    const myemail = "arre@gmail.com";
    const a = document.createElement("a");
    a.href = `mailto:${myemail}?subject=${encodeURIComponent(
      inputSubject
    )}&body=${encodeURIComponent(
      `Hello, my name is ${inputName}, and my number is ${inputPhone}. ${inputMessage}`
    )}`;
    a.click();
  }
}
