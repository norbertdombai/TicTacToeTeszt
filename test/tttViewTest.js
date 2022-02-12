/*lére jön e a játéktér?*/
const { test } = QUnit;
const tomb = []
const controller = new TTTController(tomb);
const jatekter = new JatekterView (tomb);
const infoPanel = new infoPanelView(tomb);
console.log(tomb);

QUnit.module('felület működése', function(h){
    test('létre jön e a játék tér?',function(assert){
        for(let index = 0; index < 9; index++){
            assert.ok(tomb[index].Elem, 'létre jön a div')
            assert.ok($('article div').eq(index),'létre jön a div')
            assert.ok(tomb[index].pElem,'létre jön a div-ben a p')
        }
    });
    test('ptlan-> X ps -> O', function(assert){
        for(let index = 0; index <9;index++){
        tomb[index].Elem.click()
        if (index % 2 == 0){
            assert.equal(tomb[index].pElem.html(),'X')
            assert.equal(tomb[index].ertek,'X')
        }else{
            assert.equal(tomb[index].pElem.html(),'O')
            assert.equal(tomb[index].ertek,'O')
        }
        assert.equal(tomb[index].aktiv,false)
        }
    })
    test('infopanelen megfelelő szöveg?', function(assert){
        


    })


/*Az egyes objektumok alapértékei jók-e*/
/*Ha rákattintunk az egyes elemekre, akkor beíródik e az X vagy az O*/
/*Ehhez már kell a controller*/
/*az infopanelbe a megfelelő szüveg kerül-e ki?*/

})


