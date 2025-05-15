import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formDataObj = Object.fromEntries(form.entries());
    console.log(formDataObj);

    setData([...data, formDataObj]);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Siapa nama anda?</label>
        </div>
        <input type="text" name="name" id="fullName" />

        <div>
          <label htmlFor="umur">Berapa umur anda?</label>
        </div>
        <input type="number" name="old" id="umur" />

        <div>
          <label>Apa Jenis Kelamin anda</label>
          <br />
          <input type="radio" name="JenisKelamin" id="gender1" value="Cowo" />
          <label htmlFor="gender1">Laki-Laki</label>
          <input type="radio" name="JenisKelamin" id="gender2" value="Cewe" />
          <label htmlFor="gender2">Perempuan</label>
        </div>

        <div>
          <label>Apakah anda perokok?</label>
          <br />
          <input type="radio" name="rokok" id="ya" value="y" />
          <label htmlFor="ya">Ya</label>
          <input type="radio" name="rokok" id="tidak" value="t" />
          <label htmlFor="tidak">Tidak</label>
        </div>

        <div>
          <label>Jika anda perokok, rokok apa yang anda pernah coba?</label>
          <div>
            <input type="checkbox" name="gudang-garam" value="Gudang Garam" />
            <label htmlFor="gudang">Gudang Garam Filter</label>
          </div>
          <div>
            <input type="checkbox" name="lucky" value="Lucky Strike" />
            <label htmlFor="lucky">Lucky Strike</label>
          </div>
          <div>
            <input type="checkbox" name="marl" value="Marlboro" />
            <label htmlFor="marl">Marlboro</label>
          </div>
          <div>
            <input type="checkbox" name="esse" value="Esse" />
            <label htmlFor="esse">Esse</label>
          </div>
        </div>

        <div>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>

      <Table list={data} />
    </>
  );
}

function Table({ list }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Jenis Kelamin</th>
          <th>Perokok</th>
          <th>Jenis Rokok</th>
        </tr>
      </thead>
      <tbody>
        {list.map((e, i) => (
          <tr key={i}>
            <td>{e.name}</td>
            <td>{e.old}</td>
            <td>{e.JenisKelamin}</td>
            <td>{e.rokok === "y" ? "Ya" : "Tidak"}</td>
            <td>
              {Object.entries(e)
                .filter(([key, _]) =>
                  ["gudang-garam", "lucky", "marl", "esse"].includes(key)
                )
                .map(([_, value]) => value)
                .join(", ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
