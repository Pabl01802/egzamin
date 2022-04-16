import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'

let idNum = 0

const questions = [{
    id: idNum,
    title: 'Stan zachowania elementów architektonicznych części elewacji kościoła, pokazany na reprodukcji zdjęcia stereofotogrametrycznego, ocenić można jako ',
    a: 'niewymagający renowacji.',
    b: 'wymagający generalnej renowacji. ',
    c: 'niewymagający doraźnych napraw.',
    d: 'wymagający doraźnego zabezpieczenia.',
    correct: 'wymagający generalnej renowacji.',
    chance: 1,
    img: true, 
    src: img1
},
{   
    id: idNum+=1,
    title: 'Dobierając sposób wykonania renowacji zabytkowych, sztukatorskich elementów architektury należy przede wszystkim kierować się ',
    a: 'względami techniczno-ekonomicznymi. ',
    b: 'materiałami, z których powstawały. ',
    c: 'współczesnymi technologiami. ',
    d: 'własną inwencją twórczą.',
    correct: 'materiałami, z których powstawały.',
    chance: 1,
    img: false,
},
{
    id: idNum+=1,
    title: 'Do wykonywania profili ciągnionych należy użyć',
    a: 'gracę, cement i szablon.',
    b: 'gracę, wapno i wzornik. ',
    c: 'pacę, wapno i szablon. ',
    d: 'kielnię, gips i wzornik. ',
    correct: 'kielnię, gips i wzornik.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do wykonania formy klinowej należy zastosować',
    a: 'zaczyn gipsowy. ',
    b: 'zaprawę glinianą',
    c: 'zaczyn wapienny. ',
    d: 'zaprawę wapienno-gipsową. ',
    correct: 'zaczyn gipsowy.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Kształt linii ostrza noży szablonów do profili ciągnionych zapewnia się przy użyciu pilników',
    a: 'zdzieraków.',
    b: 'ryflowych. ',
    c: 'gładzików. ',
    d: 'iglaków. ',
    correct: 'ryflowych.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Dokładne kopie sztukatorskich elementów architektury otrzymuje się przez zdjęcie z nich formy',
    a: 'klinowej. ',
    b: 'straconej.',
    c: 'blokowej. ',
    d: 'odciskanej.',
    correct: 'odciskanej.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Formy klejowe zabezpiecza się przed pleśnieniem przez dodanie do rozpuszczonego kleju niewielkiej ilości kwasu ',
    a: 'siarkowego ',
    b: 'mlekowego ',
    c: 'salicylowego ',
    d: 'mrówkowego',
    correct: 'salicylowego',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do wykonania kopii z modelu zamontowanego na ścianie najlepiej zdjąć formę    ',
    a: 'silikonową zwykłą. ',
    b: 'klejową z płaszczem. ',
    c: 'klejową wzmocnioną. ',
    d: 'silikonową z płaszczem. ',
    correct: 'silikonową z płaszczem. ',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do wykonania kilku odlewów lub odlewów o bardziej skomplikowanym kształcie, stosuje się formę',
    a: 'gipsową straconą. ',
    b: 'glinianą odciskaną. ',
    c: 'gipsową klinową z płaszczem. ',
    d: 'kombinowaną klinowo-klejową.',
    correct: 'gipsową straconą.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Podłoże wapienno-gipsowe do wykonania sztukaterii z narzutu powinno być    ',
    a: 'gładkie i suche. ',
    b: 'gładkie i wilgotne. ',
    c: 'ponacinane i suche.',
    d: 'ponacinane i wilgotne.',
    correct: 'ponacinane i wilgotne.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Cięższe sztukaterie montuje się na powierzchniach pionowych za pomocą    ',
    a: 'wieszaków z drutu. ',
    b: 'zaprawy wapiennej.',
    c: 'wspornika stalowego. ',
    d: 'zaczynu gipsowego z dodatkiem ciasta wapiennego. ',
    correct: 'wspornika stalowego.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Sztukaterię, w której część powtarzających się motywów wykonanych z gipsu zastąpiono malaturą, nazywa się polichromią',
    a: 'architektoniczną',
    b: 'ornamentalną',
    c: 'rustykalną',
    d: 'figuralną',
    correct: 'ornamentalną',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Renowację patyny pokrywającej wyrób gipsowy przeprowadza się wymieniając     ',
    a: 'tylko warstwę przypowierzchniową. ',
    b: 'tylko warstwę laserunkową. ',
    c: 'wszystkie warstwy. ',
    d: 'tylko warstwę tłową. ',
    correct: 'wszystkie warstwy.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Zaimpregnowania środkami hydrofobowymi wymagają zawsze',
    a: 'piaskowce i wapienie. ',
    b: 'granity i piaskowce. ',
    c: 'bazalty i dolomity. ',
    d: 'wapienie i granity. ',
    correct: 'piaskowce i wapienie.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do czyszczenia cennych ornamentów i rzeźb gipsowych należy używać    ',
    a: 'dłut, noży i skalpeli',
    b: 'papierów ściernych',
    c: 'myjki ciśnieniowej',
    d: 'odkurzacza',
    correct: 'odkurzacza',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'W formie klinowej z płaszczem, połączenia klinów ze sobą wykonuje się za pomocą',
    a: 'pętelek',
    b: 'zamków',
    c: 'kleju kostnego',
    d: 'szpachli gipsowej',
    correct: 'zamków',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Model tralki gipsowej najczęściej wykonuje się stosując technologię',
    a: 'rzeźbienia w bryle.',
    b: 'robót ciągnionych. ',
    c: 'montażu modelu. ',
    d: 'kombinowaną. ',
    correct: 'robót ciągnionych.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do odtworzenia poleru na falistych powierzchniach stiuku gipsowego w miejscach, gdzie ze względu na kształt podłoża nie można zastosować ściernic, należy zastosować',
    a: 'wiązkę słomy. ',
    b: 'liście dębowe. ',
    c: 'wiązkę skrzypu. ',
    d: 'korzeń chrzanu. ',
    correct: 'wiązkę skrzypu.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Po zakończeniu właściwego polerowania w stiukach lustrzanych, polerowanie na olej zaleca się rozpocząć po upływie ',
    a: 'niecałego tygodnia. ',
    b: 'jednego do dwóch tygodni. ',
    c: 'dwóch do trzech tygodni. ',
    d: 'co najmniej czterech tygodni. ',
    correct: 'co najmniej czterech tygodni.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do wykonania renowacji powierzchni stiuku cementowego należy zastosować',
    a: 'szkło wodne. ',
    b: 'sodę kaustyczną.',
    c: 'szpachlę klejową. ',
    d: 'drobnoziarniste ściernice. ',
    correct: 'drobnoziarniste ściernice.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Zaokrąglenie ostrych krawędzi kamiennych elementów architektonicznych wskazuje na występowanie zjawiska',
    a: 'deflacji',
    b: 'wietrzenia',
    c: 'korozji chemicznej',
    d: 'korozji biologicznej',
    correct: 'deflacji',
    chance: 1,
    img: false,
},
{
    id: idNum+=1,
    title: 'Który zestaw narzędzi należy dobrać do wykonywania na powierzchni kamienia faktury groszkowej?     ',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    correct: 'C',
    chance: 1,
    img: true,
    src: img2
},
{
    id: idNum+=1,
    title: 'Szablon kamieniarski z zębami do wycinania fug w gzymsach, zwany karnesem, wykonuje się jako profil',
    a: 'o pojedynczej krzywiźnie. ',
    b: 'o podwójnej krzywiźnie',
    c: 'o potrójnej krzywiźnie. ',
    d: 'o poczwórnej krzywiźnie. ',
    correct: 'o podwójnej krzywiźnie.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Jakiego rodzaju połączenie wykonuje się przy osadzaniu kamiennej tralki balustrady w stopnicy schodów kamiennych? ',
    a: 'Na kleju.',
    b: 'Na trzpieniu.',
    c: 'Na wypuście. ',
    d: 'Na zaprawie. ',
    correct: 'Na wypuście.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Tambury (bębny) trzonu kolumny, w celu zabezpieczenia przed wzajemnym przesuwaniem się, łączono za pomocą',
    a: 'kleju',
    b: 'obejm',
    c: 'bolców',
    d: 'zamków',
    correct: 'bolców',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Którą kotwę z przedstawionych na rysunku należy dobrać jako nośną do filara?     ',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    correct: 'B',
    chance: 1,
    img: true,
    src: img3
},
{
    id: idNum+=1,
    title: 'Fałszywą patyną jest warstwa na powierzchni kamienia, która    ',
    a: 'wzmacnia element kamienny. ',
    b: 'zabezpiecza element kamienny.',
    c: 'powstała w okresie sezonowania kamienia. ',
    d: 'powstała wskutek zanieczyszczeń atmosfery. ',
    correct: 'powstała w okresie sezonowania kamienia.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Ręczne kucie, na przygotowanej powierzchni steli kamiennej zaprojektowanego napisu w technice reliefu wklęsłego, należy rozpocząć od ',
    a: 'wykucia otoczenia liter. ',
    b: 'zgrubnego wykucia liter. ',
    c: 'nakłucia środka każdej litery. ',
    d: 'oczyszczenie powierzchni z kurzu i zabrudzeń. ',
    correct: 'nakłucia środka każdej litery.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Jaką technikę złoceń należy zastosować do złocenia kamieniarskich elementów architektonicznych?     ',
    a: 'Na kalafonii. ',
    b: 'Na mixtion. ',
    c: 'Na pulment. ',
    d: 'Na sandarak.',
    correct: 'Na mixtion.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Z informacji podanych w tabeli wynika, że do renowacji okładziny kamiennej wykonanej z piaskowca kopulaka NIE NALEŻY stosować',
    a: 'wody pod ciśnieniem.',
    b: 'sprężonego powietrza. ',
    c: 'kompresów alkalicznych.',
    d: 'wody z dodatkiem kwasów. ',
    correct: 'kompresów alkalicznych.',
    chance: 1,
    img: true,
    src: img4
},
{
    id: idNum+=1,
    title: 'Podłoża pod uzupełnienia ubytków kamieniarskich elementów architektury, muszą    ',
    a: 'być co najmniej dwa razy szersze niż ich głębokość. ',
    b: 'zwężać się lejkowato w głąb kamienia, który jest uzupełniany',
    c: 'posiadać na całej powierzchni nienaruszoną strukturę kamienia. ',
    d: 'różnić się kolorem od materiału, z którego wykonuje się uzupełnienie.',
    correct: 'posiadać na całej powierzchni nienaruszoną strukturę kamienia.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Kształt fleków do brakujących fragmentów kamieniarskich elementów architektury należy każdorazowo kształtować',
    a: 'w sposób organiczny. ',
    b: 'linią łamaną i falistą. ',
    c: 'w sposób dowolny. ',
    d: 'geometrycznie. ',
    correct: 'geometrycznie.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Aby wykonać profil dobity do płaszczyzny, trzeba zastosować    ',
    a: 'dwa szablony. ',
    b: 'dwa przeciwszablony.',
    c: 'szablon i przeciwszablon. ',
    d: 'dwa szablony i przeciwszablon. ',
    correct: 'szablon i przeciwszablon.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Jaką metodą uzupełniamy wąskie i głębokie, ubytki w kamieniarskich elementach architektury i w rzeźbach?',
    a: 'Plombowania',
    b: 'Torkretowania',
    c: 'Szpachlowania',
    d: 'Wstrzykiwania',
    correct: 'Wstrzykiwania',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Przed wykonaniem flekowania materiału kamiennego uzupełniane miejsce należy     ',
    a: 'zgeometryzować',
    b: 'nasmarować',
    c: 'wyszlifować',
    d: 'podgrzać',
    correct: 'zgeometryzować',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Fragmenty kamieniarskich elementów architektury łączy się ze sobą w sposób     ',
    a: 'określony regionalną tradycją',
    b: 'zgodny z najnowszymi osiągnięciami nauki. ',
    c: 'określony w projekcie techniczno-roboczym. ',
    d: 'dowolny, lecz z zachowaniem estetyki złączy. ',
    correct: 'określony w projekcie techniczno-roboczym.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Jakiego typu uzupełnienie ubytku w tamburze trzonu kolumny przedstawia rysunek? ',
    a: 'Łatę na wpust.',
    b: 'Flek na trzpieniu. ',
    c: 'Wstawkę na kleju. ',
    d: 'Plombę na zaprawie. ',
    correct: 'Flek na trzpieniu.',
    chance: 1,
    img: true,
    src: img5
},
{
    id: idNum+=1,
    title: 'Pierwsza renowacja kamiennych ornamentów i znaków graficznych polega na     ',
    a: 'ich umyciu i odsoleniu. ',
    b: 'przekuciu ich na nowy wymiar.',
    c: 'ich skuciu i wykonaniu nowych. ',
    d: 'wycyklinowaniu ich powierzchni czołowych.',
    correct: 'przekuciu ich na nowy wymiar. ',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Impregnację środkiem hydrofobowym wykonuje się w celu zabezpieczenia struktury kamiennej przed     ',
    a: 'wodą',
    b: 'radiacją',
    c: 'insolacją',
    d: 'wiatrem',
    correct: 'wodą',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Jaką metodę należy zastosować do impregnacji rzeźb z piaskowca o niewielkich gabarytach?     ',
    a: 'Elektroosmotyczną. ',
    b: 'Iniekcji ciśnieniowej.',
    c: 'Kąpieli w impregnacie. ',
    d: 'Napylania powierzchniowego. ',
    correct: 'Kąpieli w impregnacie.',
    chance: 1,
    img: false
}







];
export default questions;