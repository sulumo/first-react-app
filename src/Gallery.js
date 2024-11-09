function EiffelTower(){
    return(
        <img src="/images/Eiffel.jpeg" alt="EiffelTower" width={220} height={200}/>
    );
}

function Sydney() {
     return(
        <img src="/images/Sydney.jpeg" alt="Sydney" width={230} height={200}/>
    );
}

function Colosseum() {
     return(
        <img src="/images/Colosseum.jpeg" alt="Colosseum" width={200} height={200}/>
    );
}

function Basilica() {
     return(
        <img src="/images/Basilica.jpeg" alt="Basilica" width={230} height={200}/>
    );
}

function TajMahal() {
     return(
        <img src="/images/TajMahal.jpeg" alt="Taj Mahal" width={230} height={200}/>
    );
}

function Pisa() {
     return(
        <img src="/images/Pisa.jpeg" alt="Pisa" width={215} height={200}/>
    );
}

export default function Gallery() {
  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '48px'}}>World Landmarks</h1>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <EiffelTower />
            <Sydney />
            <Colosseum />
            <Basilica />
            <TajMahal />
            <Pisa />
        </div>
    </div>
  );
}