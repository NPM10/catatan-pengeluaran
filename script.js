const baseURL = "https://script.google.com/macros/s/AKfycbzTlQutgRnrZDDUAisHkX7lmtMxUg_-8oepugbojarETYB2NSXmV_o84zMZOc0wMtEuhg/exec";
const PASSWORD = "1SAMPAI8";

document.getElementById("loginBtn").addEventListener("click", () => {
  const pw = document.getElementById("password").value;
  if (pw === PASSWORD) {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    document.getElementById("loginMsg").innerText = "Password salah!";
  }
});

async function kirimData(data) {
  await fetch(baseURL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "text/plain"
    }
  });

  return { balasan: "Data terkirim (cek Google Sheet)" };
}


document.getElementById("formInput").addEventListener("submit", async e => {
  e.preventDefault();
  const tipe = document.getElementById("tipe").value;
  const kategori = document.getElementById("kategori").value;
  const jumlah = Number(document.getElementById("jumlah").value);
  const msg = `${tipe} ${kategori} ${jumlah}`;
  const resp = await kirimData({ message: { text: msg } });
  document.getElementById("output").innerText = resp.balasan;
});

document.getElementById("cekSaldo").addEventListener("click", async () => {
  const resp = await kirimData({ message: { text: "saldo" } });
  document.getElementById("output").innerText = resp.balasan;
});

document.getElementById("rekap").addEventListener("click", async () => {
  const resp = await kirimData({ message: { text: "rekap" } });
  document.getElementById("output").innerText = resp.balasan;
});

document.getElementById("rekapBulan").addEventListener("click", async () => {
  const resp = await kirimData({ message: { text: "rekap bulan" } });
  document.getElementById("output").innerText = resp.balasan;
});

