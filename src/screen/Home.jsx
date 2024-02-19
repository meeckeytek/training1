
import React, { useState, useEffect }  from 'react'

export default function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div>
    <nav>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
      </ul>
    </nav>
    <p>{data}welcome</p>
  </div>
  )
}
