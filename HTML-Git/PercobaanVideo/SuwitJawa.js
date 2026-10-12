var tanya = true;
while( tanya ){
    var p = prompt('pilih : gajah, semut, orang');

    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    if ( p == comp ){
        hasil = 'SERI';     
    } else if ( p == 'gajah'){
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if ( p == 'orang'){
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if ( p == 'semut'){
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }

    function getPilihanKomputer(){
        const comp = Math.random();
        if( comp < 0.34 ) return 'gajah';
        if( comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
    }

    function getHasil(comp, player){
        if ( player == comp) return 'SERI';
        if ( player == 'gajah' ) return ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
        if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
        if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } 

    const pGajah = document.querySelector('.gajah');
    pGajah.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pGajah.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    })
}