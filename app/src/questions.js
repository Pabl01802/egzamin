import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import img11 from './11.jpg'
import img12 from './12.jpg'
import img13 from './13.jpg'
import img14 from './14.jpg'
import img15 from './15.jpg'
import img16 from './16.jpg'
import img17 from './17.jpg'
import img18 from './18.jpg'
import img19 from './19.jpg'
import img20 from './20.jpg'
import img21 from './21.jpg'
import img22 from './22.jpg'
import img23 from './23.jpg'

let idNum = 0

const questions = [
{
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
},
{
    id: idNum+=1,
    title: 'Aby ocenić stan zachowania sztukatorskich elementów detali architektonicznych, rysunki inwentaryzacyjne należy sporządzać w skali ',
    a: '1:20 ',
    b: '1:30',
    c: '1:40 ',
    d: '1:50 ',
    correct: '1:20',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Którą czynność należy wykonać w pierwszej kolejności podczas renowacji dekoracji sztukatorskiej, znajdującej się na odparzonym tynku? ',
    a: 'Zinwentaryzować dekorację.',
    b: 'Wyretuszować dekorację. ',
    c: 'Zdemontować dekorację.',
    d: 'Odsolić dekorację. ',
    correct: 'Zinwentaryzować dekorację.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Narzędzie sztukatorskie stosowane do opracowywania plastycznego powierzchni wypraw, którego ostrze ząbkowane służy do fakturowania powierzchni, a gładkie do jej wygładzania, nazywa się',
    a: 'packą',
    b: 'cykliną',
    c: 'szpachelką',
    d: 'skrobakiem',
    correct: 'cykliną',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Przedstawione na rysunku narzędzie stosuje się do',
    a: 'pomiaru kątów wewnętrznych. ',
    b: 'pomiaru kątów zewnętrznych. ',
    c: 'przenoszenia wymiarów zewnętrznych. ',
    d: 'przenoszenia wymiarów wewnętrznych. ',
    correct: 'przenoszenia wymiarów wewnętrznych.',
    chance: 1,
    img: true,
    src: img6
},
{
    id: idNum+=1,
    title: 'Które z narzędzi ułatwia przycinanie listew sztukatorskich łączonych w narożnikach?',
    a: 'Cyrkiel kątowy. ',
    b: 'Skrzynka uciosowa. ',
    c: 'Sztaluga modelarska. ',
    d: 'Kątomierz uniwersalny. ',
    correct: 'Skrzynka uciosowa.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do wykonywania odcisków ze sztukaterii o bogatym, precyzyjnym rysunku powierzchni, należy stosować',
    a: 'kauczuk',
    b: 'żelatynę',
    c: 'plastelinę',
    d: 'klej kostny',
    correct: 'żelatynę',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'W dokumentacji projektowej widok zinwentaryzowanych elementów sztukaterii gipsowej przedstawia się w rzucie ',
    a: 'cechowanym',
    b: 'prostokątnym',
    c: 'izometrycznym',
    d: 'aksonometrycznym',
    correct: 'prostokątnym',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Rysunek roboczy do wykonania niesymetrycznej sztukaterii sufitowej należy sporządzić z zastosowaniem siatki w skali ',
    a: '1:1 ',
    b: '1:5 ',
    c: '1:20 ',
    d: '1:50 ',
    correct: '1:1',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'W które narzędzie jest wyposażone w wzornik (szablon) do wykonywania profili ciągnionych?     ',
    a: 'Szczypce',
    b: 'Kurant',
    c: 'Rylec',
    d: 'Nóż',
    correct: 'Nóż',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Materiał do wykonywania modeli o rozwiniętych kształtach metodą rzeźbienia powinien charakteryzować się',
    a: 'dużą sztywnością i dużą twardością',
    b: 'małą sztywnością i dużą twardością. ',
    c: 'dużą plastycznością i dużą miękkością. ',
    d: 'małą plastycznością i dużą miękkśocią. ',
    correct: 'dużą plastycznością i dużą miękkością.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Z jakiej formy można otrzymać model w postaci cienkościennego odlewu twarzy człowieka?     ',
    a: 'Blokowej',
    b: 'Straconej',
    c: 'Klinowej',
    d: 'Huśtanej',
    correct: 'Huśtanej',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Tendencję do odkształcenia w postaci skurczu lub płynięcia, w trakcie przechowywania, przejawiają formy ',
    a: 'ceramiczne',
    b: 'silikonowe',
    c: 'siarkowe',
    d: 'gipsowe',
    correct: 'silikonowe',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Która z form posiada dwie warstwy gipsowe – ostrzegawczą i negatywowo-konstrukcyjną?     ',
    a: 'Płaszczowa',
    b: 'Blokowa',
    c: 'Stracona',
    d: 'Klinowa',
    correct: 'Stracona',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Jaki powinien byü stosunek wody do gipsu w zaczynie gipsowym do wykonania typowego odlewu w formie blokowej, jednoczĊĞciowej otwartej?',
    a: '1:4 ',
    b: '1:5',
    c: '1:6 ',
    d: '1:7 ',
    correct: '1:6',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Zaprawę cementową z domieszkami szlachetnymi, jak grysiki i mączki marmurowe, stosuje się do wykonywania ',
    a: 'całej objętości odlewu.',
    b: 'wyłącznie rdzenia odlewu. ',
    c: 'wypukłych fragmentów odlewu. ',
    d: 'wyłącznie warstwy powierzchniowej odlewu. ',
    correct: 'wyłącznie warstwy powierzchniowej odlewu. ',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Który z czynników, wynikający z niezachowania reżimu technologicznego na etapie przygotowania zaczynu gipsowego, ma wpływ na pylenie powierzchni suchego odlewu? ',
    a: 'Zbyt mała ilość wody.',
    b: 'Zbyt duża ilość wody.',
    c: 'Zanieczyszczenie wody wapnem.',
    d: 'Niewłaściwa ilość wapna w wodzie.',
    correct: 'Zbyt mała ilość wody.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Pielęgnację rozformowanego odlewu, wykonanego na bazie spoiwa hydraulicznego, należy przeprowadzać w otoczeniu o wilgotności ',
    a: '60% przez okres 10 dni. ',
    b: 'nieco wyższej niż 60% przez okres 10 dni. ',
    c: 'nieco obniżonej od 60% przez okres 14 dni.',
    d: 'znacznie niższej niż 60% przez okres 14 dni. ',
    correct: 'nieco wyższej niż 60% przez okres 10 dni.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Główną przyczyną powstania wykwitów na powierzchni gipsowej sztukaterii jest    ',
    a: 'wilgoć znajdująca się w podłożu.',
    b: 'nasycenie jej roztopioną stearyną.',
    c: 'nasycenie jej gorącym olejem lnianym.',
    d: 'zbyt mała wilgotność względna powietrza w pomieszczeniu.',
    correct: 'wilgoć znajdująca się w podłożu.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do jednoczesnego odlewania i osadzania elementów sztukatorskich na powierzchni jednokrzywiznowej należy zastosować formę',
    a: 'gipsową klinową.',
    b: 'gipsową straconą.',
    c: 'klejową lustrzaną.',
    d: 'klejową dociskową.',
    correct: 'klejową dociskową.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Na rysunku przedstawiono sposób wykreślenia krzywej przekątnej sklepienia',
    a: 'siatkowego',
    b: 'krzyżowego',
    c: 'klasztornego',
    d: 'kolebkowego',
    correct: 'krzyżowego',
    chance: 1,
    img: true,
    src: img7
},
{
    id: idNum+=1,
    title: 'Którym z preparatów należy wykonać powłokę izolacyjną na powierzchni modelu z gliny, jeżeli będą na nim wykonywane zarówno formy gipsowe, jak i klejowe?',
    a: 'Lakierem szelakowym.',
    b: 'Roztworem mydła.',
    c: 'Wazeliną.',
    d: 'Stearyną.',
    correct: 'Stearyną.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Którego z przedstawianych na rysunkach narzędzi można użyć do prac modelarskich w glinie?',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    correct: 'A',
    chance: 1,
    img: true,
    src: img8
},
{
    id: idNum+=1,
    title: 'Podstawowym spoiwem, które ze względu na wiele zalet zalecane jest do sporządzania zapraw wykorzystywanych do wykonywania sztukatorskich elementów ciągnionych na stole, jest przede wszystkim',
    a: 'gips.',
    b: 'cement',
    c: 'ciasto wapienne.',
    d: 'wapno hydratyzowane.',
    correct: 'gips.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do impregnacji odtłuszczonej formy klejowej, która ma być gotowa do wykonywania odlewów po upływie około dwóch godzin od zaimpregnowania, należy zastosować',
    a: 'wazelinę.',
    b: 'pokost lniany.',
    c: 'alkohol poliwinylowy.',
    d: 'roztwór ałunu potasowego.',
    correct: 'roztwór ałunu potasowego.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do oczyszczenia sztukaterii gipsowej z resztek farby klejowej, która pozostała we wgłębieniach, należy zastosować ',
    a: 'narzędzia tynkarskie.',
    b: 'narzędzia sztukatorskie.',
    c: 'szczotkę z włosia naturalnego.',
    d: 'szczotkę z włosia nylonowego.',
    correct: 'narzędzia sztukatorskie.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do przecinania listew sztukaterii pod kątem przedstawionym na rysunku należy zastosować piłę rozpłatnicę oraz ',
    a: 'cyrkiel.',
    b: 'kątomierz.',
    c: 'skrzynkę uciosową.',
    d: 'prowadnicę krzyżową.',
    correct: 'skrzynkę uciosową.',
    chance: 1,
    img: true,
    src: img9
},
{
    id: idNum+=1,
    title: 'Szablon z rysunkiem, na podstawie którego będzie wykonywane sgraffito, należy wykonać w skali',
    a: '1 : 1',
    b: '1 : 2',
    c: '1 : 3',
    d: '1 : 4',
    correct: '1 : 1',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Sposób wykonywania modelu ze świeżego zaczynu gipsowego, w którym kolejno formuje się poszczególne fragmenty modelu, nadając mu zgrubny kształt i w miarę twardnienia zaczynu przeprowadza się cyzelowanie szczegółów, to',
    a: 'odlewanie.',
    b: 'montowanie.',
    c: 'modelowanie z narzutu.',
    d: 'metoda prac ciągnionych.',
    correct: 'modelowanie z narzutu.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do wykonania zwężającego się profilu gipsowego przedstawionego na rysunku należy użyć',
    a: 'wzornika zawiasowego.',
    b: 'wzornika skrzydłowego.',
    c: 'prowadnicy krzyżowej.',
    d: 'prowadnicy pierścieniowej.',
    correct: 'wzornika zawiasowego.',
    chance: 1,
    img: true,
    src: img10
},
{
    id: idNum+=1,
    title: 'Na którym rysunku przedstawiono fazę uformowania dwóch skorup płaszcza formy klinowej z modelu popiersia?',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    correct: 'C',
    chance: 1,
    img: true,
    src: img11
},
{
    id: idNum+=1,
    title: 'Odlew gipsowy przedstawionej na rysunku listwy z perełkami (małej, wąskiej i niewysokiej) należy wykonać ',
    a: 'w formie jako pełny.',
    b: 'w formie jako pusty płaski.',
    c: 'jako rzeźbiony pełny bryłowy.',
    d: 'jako rzeźbiony pusty bryłowy na rdzeniu.',
    correct: 'w formie jako pełny.',
    chance: 1,
    img: true,
    src: img12
},
{
    id: idNum+=1,
    title: 'Którą z form wykonuje się w celu uzyskania wiernej kopii wspornika w sposób przedstawiony na rysunkach?',
    a: 'Klejową lustrzaną.',
    b: 'Klejową z płaszczem.',
    c: 'Gipsową z płaszczem.',
    d: 'Gipsową wieloklinową.',
    correct: 'Klejową z płaszczem.',
    chance: 1,
    img: true,
    src: img13
},
{
    id: idNum+=1,
    title: 'Przed zamocowaniem odlewu sztukaterii powierzchnię tynku w miejscu przyklejania odlewu i spodnią stronę odlewu należy nasycić wodą oraz, w przypadku gdy rozstaw rysunku wynosi około 3 cm, obie powierzchnie schropowacić przez ich porysowanie na głębokość około ',
    a: '1,0 mm',
    b: '1,5 mm',
    c: '3,0 mm',
    d: '4,5 mm',
    correct: '3,0 mm',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Na rysunku przedstawiono etap mocowania następujących elementów głowicy korynckiej: ',
    a: 'woluty i kielicha.',
    b: 'kielicha i abakusa.',
    c: 'woluty i liści akantu.',
    d: 'abakusa i liści akantu.',
    correct: 'woluty i liści akantu.',
    chance: 1,
    img: true,
    src: img14
},
{
    id: idNum+=1,
    title: 'Wielobarwne ozdoby malarskie przedstawione na rysunku, wykonywane na tynkach w budownictwie sakralnym, określa się jako polichromie',
    a: 'figuralne',
    b: 'patronowe',
    c: 'ornamentalne',
    d: 'architektoniczne',
    correct: 'figuralne',
    chance: 1,
    img: true,
    src: img15
},
{
    id: idNum+=1,
    title: 'Po wykonaniu i osuszeniu odlewu sztukaterii gipsowej jego powierzchnię można utwardzić przez zanurzenie lub nasycenie za pomocą pędzla',
    a: '4÷6% roztworem ałunu potasowego.',
    b: '8÷10% roztworem ałunu potasowego.',
    c: '4÷6% spirytusowym roztworem szelaku.',
    d: '8÷10% spirytusowym roztworem szelaku.',
    correct: '8÷10% roztworem ałunu potasowego.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Podczas obróbki powierzchni stwardniałego stiuku, po szlifowaniu i szpachlowaniu wykonuje się impregnację gorącym roztworem kleju kostnego, z niewielkim dodatkiem gipsu, w celu',
    a: 'nadania mu połysku.',
    b: 'wydobycia ostrości barw.',
    c: 'wygładzenia jego powierzchni.',
    d: 'utwardzenia jego powierzchni.',
    correct: 'utwardzenia jego powierzchni.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do klejenia połamanych odlewów gipsowych stosuje się gips oraz',
    a: 'kazeinę.',
    b: 'olej lniany.',
    c: 'chlorek baru.',
    d: 'szelak w spirytusie.',
    correct: 'kazeinę.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Łącznik, który należy zastosować do wzmocnienia połączenia słupka kamiennego o podstawie kwadratu z betonowym podłożem, przedstawiono na rysunku',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    correct: 'D',
    chance: 1,
    img: true,
    src: img16
},
{
    id: idNum+=1,
    title: 'Mikrozarysowania na elementach architektonicznych i rzeźbach z piaskowca narażonych na silne działanie słońca powstają na skutek',
    a: 'zwiększenia szczelności kamienia.',
    b: 'przyspieszonego ubytku składników skałotwórczych.',
    c: 'przyspieszonego procesu rozkładu minerałów w kamieniu.',
    d: 'pojawienia się termicznych naprężeń międzycząsteczkowych.',
    correct: 'pojawienia się termicznych naprężeń międzycząsteczkowych.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Która ze skał, ze względu na bogatą kolorystykę i urozmaicony rysunek, stanowi najszlachetniejszy materiał rzeźbiarski i zdobniczy w architekturze wnętrz?',
    a: 'Porfir',
    b: 'Diabaz',
    c: 'Marmur',
    d: 'Piaskowiec',
    correct: 'Marmur',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Maszynę, którą należy zastosować do wykonania frezowania kamiennego wazonu o kształcie bryły obrotowej według zadanego rysunku, przedstawiono na rysunku',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    correct: 'B',
    chance: 1,
    img: true,
    src: img17
},
{
    id: idNum+=1,
    title: 'Niezamykającym porów materiałem zalecanym do stosowania w celu regeneracji i wzmocnienia powierzchni rzeźb z wapienia po ich oczyszczeniu jest',
    a: 'mleko wapienne.',
    b: 'zaczyn z białego cementu.',
    c: 'emulsja z tworzyw sztucznych.',
    d: 'klej silikatowy z mączką kamienną.',
    correct: 'mleko wapienne.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Który z materiałów należy zastosować w celu chemicznego wspomagania usuwania powłok olejnych z płyt marmurowych?',
    a: 'Kwas nieorganiczny.',
    b: 'Szkło wodne potasowe.',
    c: 'Rozpuszczalnik organiczny.',
    d: 'Klajster ze skrobi ziemniaczanej.',
    correct: 'Rozpuszczalnik organiczny.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Szablon przedstawiony na rysunku przeznaczony jest do wykonania w twardym kamieniu ',
    a: 'falcu',
    b: 'rowka',
    c: 'szlaku',
    d: 'bruzdy',
    correct: 'falcu',
    chance: 1,
    img: true,
    src: img18
},
{
    id: idNum+=1,
    title: 'Przedstawiony na rysunku łącznik, który służy do przymocowania kamieniarskich elementów architektury do podłoża, to',
    a: 'kołek',
    b: 'kotwa',
    c: 'klamra',
    d: 'trzpień',
    correct: 'kotwa',
    chance: 1,
    img: true,
    src: img19
},
{
    id: idNum+=1,
    title: 'Tambury (bębny) trzonu kolumny w celu zabezpieczenia przed wzajemnym przesuwaniem się łączono za pomocą',
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
    title: 'Kamienny gzyms płytowy przedstawiony na rysunku, montowany na murze przy użyciu zaprawy cementowej, wymaga dodatkowo zakotwienia, jeżeli wysięg b płyty poza lico muru wynosi ',
    a: 'dokładnie 1/4 jej długości a.',
    b: 'dokładnie 1/3 jej długości a.',
    c: 'mniej niż 1/4 jej długości a',
    d: 'więcej niż 1/3 jej długości a.',
    correct: 'więcej niż 1/3 jej długości a.',
    chance: 1,
    img: true,
    src: img20
},
{
    id: idNum+=1,
    title: 'Spoiny w zamontowanych elementach kamiennych należy bezpośrednio przed wypełnieniem ',
    a: 'osuszyć',
    b: 'oczyścić',
    c: 'zagruntować',
    d: 'zaimpregnować',
    correct: 'oczyścić',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Ręczne wykuwanie liter wypukłych na wygładzonej płycie z kamienia należy rozpocząć od wykonania nacięć na powierzchni płyty w odległości 1÷2 mm od każdej litery, a następnie należy wykonać kolejno następujące czynności: ',
    a: 'wykuć okrągłe powierzchnie wewnątrz liter, wykuć i wygrotować otoczenie liter, obrobić litery lekko ukośnie, wygładzić ich powierzchnie boczne i powierzchnie między nimi. ',
    b: 'wykuć i wygrotować otoczenie liter, obrobić litery lekko ukośnie, wykuć okrągłe powierzchnie wewnątrz liter, wygładzić ich powierzchnie boczne i powierzchnie między nimi.',
    c: 'wykuć i wygrotować otoczenie liter, wykuć okrągłe powierzchnie wewnątrz liter, obrobić litery lekko ukośnie, wygładzić ich powierzchnie boczne i powierzchnie między nimi.',
    d: 'wykuć i wygrotować okrągłe powierzchnie wewnątrz liter, wygrotować otoczenie liter, litery obrobić lekko ukośnie, wygładzić ich powierzchnie boczne i powierzchnie między nimi. ',
    correct: 'wykuć i wygrotować otoczenie liter, obrobić litery lekko ukośnie, wykuć okrągłe powierzchnie wewnątrz liter, wygładzić ich powierzchnie boczne i powierzchnie między nimi.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Która z wymienionych metod wykonywania ornamentów na listwie z kamienia wymaga bezwzględnie zabezpieczenia folią nieobrabianych powierzchni? ',
    a: 'Grawerowanie frezarką.',
    b: 'Okuwanie ręczne reliefu.',
    c: 'Piaskowanie strumieniowe.',
    d: 'Kucie ręczne obrysu wewnętrznego.',
    correct: 'Piaskowanie strumieniowe.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Suche, czyste i odtłuszczone litery mało widocznego napisu, wykute na wygładzonej płycie kamiennej, przed ich barwieniem techniką malarską należy zagruntować',
    a: 'roztworem farby.',
    b: 'czystym pokostem.',
    c: 'klejem lateksowym.',
    d: 'lakierem silikonowym.',
    correct: 'czystym pokostem.',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Z informacji zawartych w tabeli wynika, że jedną z metod, którą zaleca się stosować do oczyszczenia średnio zabrudzonej powierzchni wapienia, jest metoda',
    a: 'czyszczenia na sucho sprężonym powietrzem.',
    b: 'chemiczna alkaliczna.',
    c: 'chemiczna kwaśna.',
    d: 'mechaniczna.',
    correct: 'chemiczna alkaliczna.',
    chance: 1,
    img: true,
    src: img21
},
{
    id: idNum+=1,
    title: 'Oznaczony na rysunku cyfrą 1 uszkodzony bęben kamiennej kolumny należy podczas jej naprawy ',
    a: 'wymienić na nowy.',
    b: 'uzupełnić flekami osadzanymi na zaprawie.',
    c: 'uzupełnić zaprawą cementową w kolorze kamienia.',
    d: 'obłożyć płytkami z kamienia na zaprawie cementowej.',
    correct: 'wymienić na nowy.',
    chance: 1,
    img: true,
    src: img22
},
{
    id: idNum+=1,
    title: 'Na podstawie przedstawionej instrukcji oblicz maksymalną ilość pigmentu, którą można dodać do 12 kg kleju epoksydowego przeznaczonego do połączeń elementów kamiennych.',
    a: '0,25 kg',
    b: '0,36 kg',
    c: '3,60 kg',
    d: '4,00 kg',
    correct: '',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Do naprawy drobnych ubytków i spękań w kamiennych elementach architektonicznych i rzeźbach zalecana jest metoda',
    a: 'kitowania',
    b: 'flekowania',
    c: 'szlamowania',
    d: 'torkretowania',
    correct: 'kitowania',
    chance: 1,
    img: false
},
{
    id: idNum+=1,
    title: 'Zabiegiem mającym na celu wzmocnienie struktury kamieni porowatych i pozbawionych zasolenia materiałami, które penetrują w głąb i nie tworzą warstw uszczelniających na powierzchni, jest',
    a: 'iniekcja',
    b: 'ługowanie',
    c: 'impregnacja',
    d: 'elektroosmoza',
    correct: 'impregnacja',
    chance: 1,
    img: false
}

];
export default questions;