import React from 'react';

type NameTagProps = { name: string };

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

type MyType = { name: string; nickname?: string; style: React.CSSProperties };
const MyComp = (props: MyType) => {
  return (
    <div style={props.style}>
      <h2>Hello {props.nickname}</h2>
      <p>Here we are {props.name}</p>
    </div>
  );
};

const Application = () => {
  return (
    <div>
      <MyComp
        name="Paolo"
        nickname="pix"
        style={{ border: '2px solid black', padding: '20px', margin: '10px' }}
      />
      <NameTag name="Paolo in card" />
    </div>
  );
};

export default Application;
