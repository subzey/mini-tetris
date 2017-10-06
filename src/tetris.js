// _() – Main loop
// D() – Draw updated field b
// M(code) – Map P to p using code and merge it with field B into field b.
//           Return true if piece overlaps with B.

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines
// I - Offset of next piece

M=e=>(p=P.map((v,i)=>eval(e[0]),b=[...B])).some((x,i)=>i%2?0:(b[h=x<0|x>9|b[y=p[i+1]]>>x&1|y>17,y]|=1<<x,h)),
B=Array(18).fill(S=P=I=0),
D=e=>b.map(v=>b.map((n,x)=>x>9?0:Z.innerText=$+='□■'[v>>x&1],$+='\n'),$=S),
(_=e=>
    (P=P||[...'202131304050606171'.substr(I%6*2,k=8)],M`v`)
    ?0:I=setTimeout(_,k-2?200:20,
        M`+v+i%2`
            ?M`v`&D(B=[s=P=0,0,0,0,...b].filter(v=>v-1023||!(S+=++s)).slice(-18))
            :D(P=p)
    )
)(
onkeydown=e=>
    P?((k=e.which-38)-1&&~k
        ?k||M`P[2]-(q=1-i%2*2)*(P[3]-P[i+q])`
        :M`v-~i%2*k`
    )
    ||D(P=p):0
)
