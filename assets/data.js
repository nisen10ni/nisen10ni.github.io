// ===== 共通データ（全ページから読み込まれます）=====
// 作品・プロフィール文は InDesign「面談ポーフォ.indd」、エッセイは「エッセイ-ZINE.indd」から反映しています。

window.T={
 jp:{
  nav:{home:'HOME',about:'ABOUT',works:'WORKS',essays:'ESSAYS',contact:'CONTACT'},
  titles:{about:'プロフィール',works:'作品一覧',essays:'エッセイ',contact:'お問い合わせ'},
  name:'高木 楓',
  subname:'TAKAGI Kaede / b. 2001, Tokyo',
  portraitAlt:'高木 楓のポートレート',
  bio:"2001年生まれ。口と声、そこを通っていく自他の言葉を手がかりに、「口答え」のあり方を探求している。武蔵野美術大学造形学部油絵学科を卒業後、出版社で取材と執筆に携わり現在はマーケティングを担当。逆再生、遅延、役の入れ替えといった操作を用い、映像、パフォーマンス、エッセイなど多様な形式で制作を行う。",
  all:'ALL',
  contactLead:'制作・展示・寄稿・コラボレーションのご相談は下記までお気軽にご連絡ください。',
  essayIntro:'制作の周辺で考えたこと、読んだ本、日常のなかで拾った断片について書いています。作品と地続きの、もうひとつの思考の場所です。',
  scrollHint:'SCROLL',scrollHintB:'コンセプトを読む ↓',
  moreLabel:'解説',
  exLabel:'EXHIBITION',
  dl:[
   ['PROFILE',['2001　東京都出身','2023　武蔵野美術大学油絵学科油絵専攻 卒業','現在、都内出版社にて勤務']],
   ['EXHIBITIONS',['2022　「色和感 -いわかん-」新宿眼科画廊（東京 新宿）','2023　「令和四年度 武蔵野美術大学卒業・修了制作展」鷹の台キャンパス（東京 小平）','2023　「令和4年度 第46回 東京五美術大学連合卒業・修了制作展」国立新美術館（東京 六本木）','2023　「第二回 立川学生映画祭」立川アートランド（東京 立川）','2025　蜂谷円悠・高木楓 二人展「しずむ目 A sinking gaze」KOGANEI ART SPOT シャトー2F（東京 小金井）','2026　「喧々兼現実実験」デザインフェスタギャラリー原宿 EAST館（東京 原宿）']],
   ['ACTIVITIES',['2021　立川アートランド 運営メンバー','2024　大塚澪音 個展「Jet the phantom」DMデザイン 他','2025　松橋萌 修了制作「キャンプのレシピ」ZINEデザイン協力','2025　蜂谷円悠・高木楓 二人展「しずむ目 A sinking gaze」デザイン全般','2026　エッセイ集『備忘録』発行','現職において広告、販促物、パンフレット等のデザイン・編集・ライティング','WEBメディア『STORY AGE』記事執筆','WEBメディア『LOCAL GROWTH CONSORTIUM』記事執筆']]
  ],
  contact:[
   ['E-MAIL',{label:'nisen10ni@gmail.com',href:'mailto:nisen10ni@gmail.com'}],
   ['INSTAGRAM',{label:'@nisen10ni',href:'https://www.instagram.com/nisen10ni/'}],
   ['NOTE',{label:'note.com/nisen10ni',href:'https://note.com/nisen10ni'}]
  ]
 },
 en:{
  nav:{home:'HOME',about:'ABOUT',works:'WORKS',essays:'ESSAYS',contact:'CONTACT'},
  titles:{about:'About',works:'Works',essays:'Essays',contact:'Contact'},
  name:'TAKAGI Kaede',
  subname:'高木 楓 / b. 2001, Tokyo',
  portraitAlt:'Portrait of TAKAGI Kaede',
  bio:'Born in 2001. Taking the mouth and the voice, and the words of self and others that pass through them, as clues, Takagi explores what it means to “talk back.” After graduating from the Department of Painting (Oil Painting), College of Art and Design, Musashino Art University, Takagi worked on interviews and writing at a publishing company and now works in marketing. Using operations such as reverse playback, delay and the swapping of roles, Takagi works across video, performance, essays and other forms.',
  all:'ALL',
  contactLead:'Feel free to reach out for collaborations, exhibitions, writing, or commissions.',
  essayIntro:'Notes and essays on making, reading, and fragments gathered from daily life. The essays are available in Japanese only.',
  scrollHint:'SCROLL',scrollHintB:'Read the concept ↓',
  moreLabel:'Commentary',
  exLabel:'EXHIBITION',
  dl:[
   ['PROFILE',['Born in Tokyo, 2001','B.A., Oil Painting, Department of Painting, Musashino Art University, 2023','Currently works at a publishing company in Tokyo']],
   ['EXHIBITIONS',['2022 “Iwakan,” Shinjuku Ophthalmologist Gallery, Tokyo','2023 Musashino Art University Graduation and Completion Works Exhibition (FY2022), Takanodai Campus, Kodaira','2023 The 46th Tokyo Five Art Universities Graduation and Completion Works Exhibition (FY2022), The National Art Center, Tokyo','2023 2nd Tachikawa Student Film Festival, Tachikawa Artland, Tachikawa','2025 “A sinking gaze,” two-person exhibition with Mayu Hachiya, KOGANEI ART SPOT Château 2F, Koganei','2026 “Kenken ken Genjitsu Jikken,” Design Festa Gallery Harajuku EAST, Tokyo']],
   ['ACTIVITIES',['2021 Management member, Tachikawa Artland','2024 DM design and more for Reon Otsuka’s solo exhibition “Jet the phantom”','2025 ZINE design support for Moe Matsuhashi’s graduation project “Camp Recipes”','2025 Overall design for the two-person exhibition “A sinking gaze”','2026 Published the essay collection Bibouroku (Memorandum)','Design, editing and copywriting of advertisements, promotional materials and brochures at current workplace','Writer for the web media STORY AGE','Writer for the web media LOCAL GROWTH CONSORTIUM']]
  ],
  contact:[
   ['E-MAIL',{label:'nisen10ni@gmail.com',href:'mailto:nisen10ni@gmail.com'}],
   ['INSTAGRAM',{label:'@nisen10ni',href:'https://www.instagram.com/nisen10ni/'}],
   ['NOTE',{label:'note.com/nisen10ni',href:'https://note.com/nisen10ni'}]
  ]
 }
};

// 各作品: images は images/作品ID/01.jpg … の順でスライドに表示（枚数は自由）。cap は [日本語, 英語] のキャプション。
// jp / en が本文、jpMore / enMore があれば「解説」として続けて表示します。
window.WORKS=[
 {
  "id": "biboroku",
  "year": 2026,
  "tag": [
   "書籍",
   "BOOK"
  ],
  "title": [
   "備忘録",
   "Bibouroku (Memorandum)"
  ],
  "meta": [
   "A5判・88Pフルカラー（エッセイ、2026年11月発行）",
   "A5, 88 pages, full color (essays, published November 2026)"
  ],
  "ex": [
   "",
   ""
  ],
  "jp": "24歳から25歳になる頃、実家を出て一人暮らしを始めた。時間も、場所も、食事も変わった。そのとき携帯に書き留めていたメモを、エッセイにして本にした。親の視線、会社の先輩、世間体。その場では言い返せなかったことを、あとから書いている。全9篇。\n\n他人の体験は、その人にしか体験できない。けれど、伝えることはできる。四人の作家に「話を読んで、絵を描いてください」とだけ頼み、挿絵にしてもらった。私の体験が、他人の手でどう描き直されるのかを知りたかった。",
  "en": "Around the time I turned from 24 to 25, I left my parents' home and began living alone. My time, my place and my meals all changed. I turned the notes I kept on my phone during that period into essays and made them into a book. My parents' gaze, senior colleagues at work, the eyes of society. I am writing now what I could not answer back in the moment. Nine essays in all.\n\nAnother person's experience can only be lived by that person. But it can be conveyed. I asked four artists simply to \"read the story and draw a picture,\" and they made the illustrations. I wanted to know how my experiences would be redrawn by someone else's hand.",
  "images": [
   {
    "src": "images/biboroku/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/biboroku/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/biboroku/03.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/biboroku/04.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/biboroku/05.jpg",
    "cap": [
     "挿し絵＝はちやまゆ",
     "Illustration: はちやまゆ"
    ]
   },
   {
    "src": "images/biboroku/06.jpg",
    "cap": [
     "挿し絵＝大木花帆",
     "Illustration: 大木花帆"
    ]
   },
   {
    "src": "images/biboroku/07.jpg",
    "cap": [
     "挿し絵＝前田ひかる",
     "Illustration: 前田ひかる"
    ]
   },
   {
    "src": "images/biboroku/08.jpg",
    "cap": [
     "挿し絵＝ながはまちえ",
     "Illustration: ながはまちえ"
    ]
   }
  ]
 },
 {
  "id": "tooku",
  "year": 2026,
  "tag": [
   "パフォーマンス",
   "PERFORMANCE"
  ],
  "title": [
   "遠くの食事景色",
   "A Distant Meal Scene"
  ],
  "meta": [
   "パフォーマンス",
   "Performance"
  ],
  "ex": [
   "「喧々兼現実実験」デザインフェスタギャラリー原宿 EAST館、2026年10月",
   "“Kenken ken Genjitsu Jikken,” Design Festa Gallery Harajuku EAST, October 2026"
  ],
  "jp": "マクルーハンは『メディア論』で、メディアを人間の身体や感覚の「拡張」として論じている。この作品では、双眼鏡をつけ、マジックハンドで食事をする。二人で向かい合い、ただそれだけをおこなうナンセンスなパフォーマンスである。\n\n双眼鏡ごしでは、目の前の皿との距離がつかめない。マジックハンドは遠くまで届くが、つかんだ食べ物の感触は手に返ってこない。目と手がうまく合わず、食べ物はなかなか口に届かない。\n\nマクルーハンは『メディア論』で、メディアを身体の「拡張」として論じた。同時に、拡張は感覚を麻痺させる「自己切断」でもあるという。見えるほど、届くほど、食べることは遠くなる。失敗と成功を繰り返しながら、便利な道具がいつもの食事から何を切り落としているのかを確かめたい。",
  "en": "In Understanding Media, McLuhan discusses media as \"extensions\" of the human body and senses. In this work, we put on binoculars and eat with reach-extender grabbers. Two people sit face to face and do only this: a nonsensical performance.\n\nThrough binoculars, you cannot judge the distance to the plate in front of you. The grabber reaches far, but the feel of the food it grasps does not come back to the hand. Eye and hand fail to coordinate, and the food rarely reaches the mouth.\n\nIn Understanding Media, McLuhan argued that media are \"extensions\" of the body. At the same time, he said, extension is also a \"self-amputation\" that numbs the senses. The more we can see and the farther we can reach, the more distant eating becomes. Through repeated failure and success, I want to find out what convenient tools cut away from an ordinary meal.",
  "images": [
   {
    "src": "images/tooku/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/03.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/04.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/05.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/06.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/07.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/08.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/09.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/10.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/11.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/tooku/12.jpg",
    "cap": [
     "",
     ""
    ]
   }
  ]
 },
 {
  "id": "hantai",
  "year": 2026,
  "tag": [
   "映像",
   "VIDEO"
  ],
  "title": [
   "わいせつ三要素に反対します<br>日本国憲法改正草案に反対します<br>国旗損壊罪に反対します",
   "I Oppose the Three Elements of Obscenity<br>I Oppose the Draft Amendment to the Constitution of Japan<br>I Oppose the Crime of Damaging the National Flag"
  ],
  "meta": [
   "パフォーマンスを元にした映像（3作品）",
   "Videos based on performances (3 works)"
  ],
  "ex": [
   "「喧々兼現実実験」デザインフェスタギャラリー原宿 EAST館、2026年10月",
   "“Kenken ken Genjitsu Jikken,” Design Festa Gallery Harajuku EAST, October 2026"
  ],
  "jp": "たどたどしい喋り方で、私たちは、わいせつの定義、憲法改正草案、国旗損壊罪の条文に反対する。このたどたどしさは、日本語の文をローマ字に分解し、反対から（末尾から）読み上げることで生まれる。それを逆再生すると、元の文とほぼ同じように聞こえる。そんな即物的な手法がある。\nこれを基に、三つの文章に文字どおり「反対」するパフォーマンスをおこなった。\n途中、元の文のとおりに聞こえない箇所もある。それでも無理に喋り続ける様子に、これらの文章に従わされている身体が見えてくる。",
  "en": "Speaking haltingly, we oppose the definition of obscenity, the draft amendment to the Constitution, and the articles on the crime of damaging the national flag. This halting quality comes from breaking Japanese sentences down into romanized letters and reading them aloud in reverse, from the end. Played backwards, the recording sounds almost the same as the original sentence. Such a literal, matter-of-fact method exists.\nBased on this, I staged a performance that literally \"opposes\" three texts.\nIn places, the speech does not sound like the original sentence. Yet as we force ourselves to keep talking, a body made to obey these texts comes into view.",
  "images": [
   {
    "src": "images/hantai/01.jpg",
    "cap": [
     "『わいせつ三要素に反対します』 パフォーマンスを逆再生した映像",
     "I Oppose the Three Elements of Obscenity: the performance played in reverse"
    ]
   },
   {
    "src": "images/hantai/02.jpg",
    "cap": [
     "『わいせつ三要素に反対します』 展示会場での投影の様子",
     "I Oppose the Three Elements of Obscenity: projection at the exhibition venue"
    ]
   },
   {
    "src": "images/hantai/03.jpg",
    "cap": [
     "『日本国憲法改正草案に反対します』 パフォーマンスを逆再生した映像",
     "I Oppose the Draft Amendment to the Constitution of Japan: the performance played in reverse"
    ]
   },
   {
    "src": "images/hantai/04.jpg",
    "cap": [
     "『日本国憲法改正草案に反対します』 展示会場での投影の様子",
     "I Oppose the Draft Amendment to the Constitution of Japan: projection at the exhibition venue"
    ]
   },
   {
    "src": "images/hantai/05.jpg",
    "cap": [
     "『国旗損壊罪に反対します』 パフォーマンスを逆再生した映像",
     "I Oppose the Crime of Damaging the National Flag: the performance played in reverse"
    ]
   },
   {
    "src": "images/hantai/06.jpg",
    "cap": [
     "『国旗損壊罪に反対します』 展示会場での投影の様子",
     "I Oppose the Crime of Damaging the National Flag: projection at the exhibition venue"
    ]
   }
  ]
 },
 {
  "id": "daf",
  "year": 2026,
  "tag": [
   "パフォーマンス",
   "PERFORMANCE"
  ],
  "title": [
   "聴覚遅延フィードバック実験",
   "Delayed Auditory Feedback Experiment"
  ],
  "meta": [
   "パフォーマンス",
   "Performance"
  ],
  "ex": [
   "「喧々兼現実実験」デザインフェスタギャラリー原宿 EAST館、2026年10月",
   "“Kenken ken Genjitsu Jikken,” Design Festa Gallery Harajuku EAST, October 2026"
  ],
  "jp": "私たちは話すとき、相手に向けて声を出すと同時に、実はその声を自分の耳でも聞いている。話し手は、いわば聞き手の役も兼ねているのである。この自分の声を数十〜数百ミリ秒遅らせて本人の耳に返すと、言葉がつかえたり繰り返したりするようになり、やがて話し続けることができなくなる。この現象は「遅延聴覚フィードバック(DAF)」と呼ばれ、1950年代から研究されてきた。2012年には、この仕組みを使って相手の発話を止める装置「SpeechJammer」が日本の研究者によって発表され、イグノーベル賞を受賞している。\n\n本作では、この「自分の声が遅れて聞こえると話せなくなる」という現象を実際に体験する実験を行った。\n\n参考:重野純『音の世界の心理学〔第2版〕』ナカニシヤ出版、2014年/Wikipedia「遅延聴覚フィードバック」",
  "en": "When we speak, we direct our voice at the other person, but at the same time we are also hearing that voice with our own ears. The speaker, in a sense, doubles as a listener. If your own voice is delayed by tens to hundreds of milliseconds and returned to your ears, you begin to stumble over and repeat words, and eventually you can no longer keep speaking. This phenomenon is called \"delayed auditory feedback (DAF)\" and has been studied since the 1950s. In 2012, Japanese researchers presented \"SpeechJammer,\" a device that uses this mechanism to stop another person's speech, and it won an Ig Nobel Prize.\n\nIn this work, I conducted an experiment to actually experience this phenomenon: that you cannot speak when you hear your own voice delayed.\n\nReferences: Jun Shigeno, Oto no sekai no shinrigaku [The Psychology of the World of Sound], 2nd ed., Nakanishiya Shuppan, 2014 / Wikipedia, \"Delayed auditory feedback\"",
  "images": [
   {
    "src": "images/daf/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/daf/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/daf/03.jpg",
    "cap": [
     "",
     ""
    ]
   }
  ]
 },
 {
  "id": "montage",
  "year": 2025,
  "tag": [
   "映像",
   "VIDEO"
  ],
  "title": [
   "Montage",
   "Montage"
  ],
  "meta": [
   "2チャンネルループビデオ、プロジェクター",
   "Two-channel loop video, projector"
  ],
  "ex": [
   "「しずむ目 - A sinking gaze」、2025年9月",
   "“A sinking gaze,” KOGANEI ART SPOT, September 2025"
  ],
  "jp": "本作品は、二つの異なる「視線」によって構成されている。ひとつは、作家自身の目線そのものである「自分視点のカメラ（主観）」。もうひとつは、行動する私を第三者が外から捉えた「他者視点のカメラ（客観）である。\n\n映像の中で私は、KOGANEI ART SPOT周辺の街を歩き回っている。高架下の薄暗い道を歩き、信号が変わるのを待ち、自販機で飲み物を買い、賑やかなアーケードを抜けていく。当初、スクリーンに映し出される二つの映像は、同じ時刻・同じ場所で起きた一連の出来事として同期し、事象を多角的に捉えているかのように振る舞う。\nしかし、時間の経過とともにその同期は崩れていく。私の行動と視線は、少しずつ、あるいは決定的にズレ始め、やがて「同時間・別視点」というドキュメンタリー的な前提は破綻する。\n映している状況（撮る側）と、映されている状況（撮られる側）。二つの関係が奇妙に交差し、因果が逆転していく。その過程で、目の前にある「同じ時間軸に見える映像」そのものへの疑いを鑑賞者に抱かせることが、本作の試みである。\n\n＊映像の舞台は、展示会場であるKOGANEI ART SPOT周辺の街並みである。鑑賞者はギャラリーを出て、映像の中で私がたどった道をなぞることができる。そこで体験するのは、虚構の映像と現実の景色が重なり合う、既視感と違和感の反復である。",
  "en": "This work is composed of two different \"gazes.\" One is the \"first-person camera (subjective),\" the artist's own line of sight. The other is the \"third-person camera (objective),\" in which someone else films me from outside as I move.\n\nIn the video, I wander through the streets around KOGANEI ART SPOT. I walk along a dim road under the elevated tracks, wait for the light to change, buy a drink from a vending machine, and pass through a busy shopping arcade. At first, the two videos on the screens are synchronized as one sequence of events taking place at the same time and in the same place, behaving as if they capture those events from several angles.\nOver time, however, the synchronization breaks down. My actions and my line of sight begin to drift apart, little by little or decisively, and eventually the documentary premise of \"same time, different viewpoints\" collapses.\nThe situation of filming (the one who shoots) and the situation of being filmed (the one who is shot): the two relationships cross in strange ways, and cause and effect are reversed. In this process, the work tries to make the viewer doubt the very \"images that seem to share one timeline\" in front of them.\n\n*The video is set in the streets around KOGANEI ART SPOT, the exhibition venue. Viewers can leave the gallery and retrace the route I took in the video. What they experience there is a repetition of déjà vu and unease, as the fictional image and the real landscape overlap.",
  "images": [
   {
    "src": "images/montage/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/03.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/04.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/05.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/06.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/07.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/08.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/09.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/10.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/11.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/12.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/13.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/14.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/15.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/16.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/montage/17.jpg",
    "cap": [
     "",
     ""
    ]
   }
  ]
 },
 {
  "id": "interviewer",
  "year": 2025,
  "tag": [
   "映像",
   "VIDEO"
  ],
  "title": [
   "Interviewer",
   "Interviewer"
  ],
  "meta": [
   "シングルチャンネルビデオ、モニター",
   "Single-channel video, monitor"
  ],
  "ex": [
   "「しずむ目 - A sinking gaze」、2025年9月",
   "“A sinking gaze,” KOGANEI ART SPOT, September 2025"
  ],
  "jp": "　カフェの一席、画面右側には出版社のライター（B）、左側には編集者（A）が座り、一見すると編集者がライターの悩みを聞き出す一般的な「取材」の風景として映像は始まる。\n\n　序盤の会話は、現代の出版業界におけるライターの不明瞭な立ち位置に対する吐露だ。小説家のように机で万年筆を走らせる姿は過去のものとなり、現代ではインフルエンサーのような「著者」の存在感だけが商品として売られ、ライターはただその話し言葉を読みやすい書き言葉に「名もなき代筆家（ゴーストライター）」として消費される。Bは、ネットに溢れる「未経験OK・隙間時間の小遣い稼ぎ」といったライター募集の安易さに自身の職能を重ね、虚しさを募らせていた。\nさらに議論は「言葉の整形」へと及ぶ。「服に興味がある」という一つの発言を取っても、それが服飾文化への関心なのか、単なる物欲なのか、生身のニュアンスは「分かりやすい記事」への変換過程で削ぎ落とされてしまう。\n\n　会話が核心に触れるにつれ、編集者（A）からも、AIの台頭によって「音声をテキスト化する」という技術的価値さえ失われつつある現状が語られ、二人は「人が人に取材し、記事にする価値」の存続について出口のない問いに直面する。\n　しかし、映像が後半に差し掛かると、画面内の空気が変質する。質問を投げていたはずの編集者の主導権が揺らぎ、答える側であったライターが状況を支配し始めるのだ。互いの視線、言葉の端々に生じる明らかな違和感。取材における強者と弱者、見る側と見られる側の主従関係が反転し、融解していく中で、「本当のインタビュアーは一体どちらなのか」という問いが鑑賞者に突きつけられる。\n本作は、取材記録という形式を借りて、映像におけるフィクション性の問題を扱った作品である。",
  "en": "At a table in a café, a writer from a publishing company (B) sits on the right of the frame and an editor (A) on the left. The video begins as what looks like an ordinary \"interview\" in which the editor draws out the writer's worries.\n\nThe early conversation is an outpouring about the unclear position of writers in today's publishing industry. The novelist running a fountain pen across a desk belongs to the past; today only the presence of an \"author,\" such as an influencer, is sold as a product, while the writer is consumed as a \"nameless ghostwriter\" who simply turns that person's spoken words into readable written ones. Seeing their own skills reflected in the casual writer job ads that flood the internet (\"no experience needed, earn pocket money in your spare time\"), B grows increasingly hollow.\nThe discussion then turns to the \"reshaping of words.\" Take a single remark such as \"I'm interested in clothes\": whether it means an interest in fashion culture or mere desire for things, the living nuance is stripped away in the process of conversion into an \"easy-to-understand article.\"\n\nAs the conversation nears its core, the editor (A) also describes how, with the rise of AI, even the technical value of \"turning speech into text\" is being lost, and the two face a question with no way out: whether \"the value of a person interviewing a person and turning it into an article\" can survive.\nIn the second half of the video, however, the atmosphere within the frame changes. The editor, who was supposed to be asking the questions, loses control, and the writer, who was supposed to be answering, begins to dominate the situation. Clear unease appears in their glances and at the edges of their words. As the hierarchy of the interview (strong and weak, the one who looks and the one who is looked at) is reversed and dissolves, the viewer is confronted with the question: \"Who is the real interviewer?\"\nBorrowing the form of an interview record, this work deals with the problem of fictionality in the moving image.",
  "images": [
   {
    "src": "images/interviewer/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/03.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/04.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/05.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/06.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/07.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/08.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/09.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interviewer/10.jpg",
    "cap": [
     "",
     ""
    ]
   }
  ]
 },
 {
  "id": "lipsync",
  "year": 2023,
  "tag": [
   "映像",
   "VIDEO"
  ],
  "title": [
   "リップ・シンク",
   "Lip Sync"
  ],
  "meta": [
   "シングルチャンネルビデオ、プロジェクター",
   "Single-channel video, projector"
  ],
  "ex": [
   "第二回 立川学生映画祭、立川アートランド、2023年10月",
   "2nd Tachikawa Student Film Festival, Tachikawa Artland, October 2023"
  ],
  "jp": "幼い頃、膝枕で仕上げ磨きをされていた。下から見上げる母の口は逆さまで、声とは別の生きもののように動いて見えた。\n\n映像は、私の唇のクローズアップと、その体験を語る声でできている。字幕ははじめ口の動きと同期しているが、次第に口から剥がれ、回転し、上下が反転する。鑑賞者は映像を眺める状態から、動き回る文字を目で追って読まされる状態へ移される。\n\n字幕が逆さまになったとき、正しい向きだと思って見ていた唇が、最初から逆さまだったことに気づく。逆さまの顔では、口の異変に気づきにくい（サッチャー錯視）。その見落としを、鑑賞者自身の目で体験してもらう作品である",
  "jpMore": "映像は、歯磨きをする口元の接写と、「しあげはおかあさん」という、誰もが幼少期に耳にしたことのある童謡のフレーズから始まる。スクリーンを支配するのは、私の唇の極端なクローズアップである。画面の中の「口」は、私の幼少期の実体験である、母の口元に対する違和感を語り始める。\n\n当初、画面下部に現れる字幕は、口の動きと完全に同期し、一文字ずつリズミカルに表示される。しかし、次第にその従属関係は崩れていく。字幕は口の動きから剥離し、まるで自らの意志を持ったかのように画面上を独り歩きし始める。予測不能な動きで誤読を誘う文字の列。さらにそれらは、物理的に回転し、反転し始める。この瞬間、鑑賞者の意識は「映像全体をぼんやりと眺める（観る）」状態から、「動き回る文字を必死に目で追って解読する（読まされる）」状態へと強制的に移行させられる。これは、映像と鑑賞者の主従関係を変化させる仕掛けである。\n\n暴走していた字幕は、最終的に上下が反転した状態で継続する。ここで語られるナレーションの内容と、反転した字幕、そして画面の状況が一つに繋がる。語り手である私は、「幼い頃、母の口がまるで別の生き物のように奇妙に動いて見えた」という体験を語っており、それと同時に、鑑賞者はある衝撃的な事実に気づくことになる。今まで「正常な向き」だと思い込んで見ていた背景の巨大な唇が、実は最初から上下反転していたのだということに。字幕が反転して初めて、私たちは背景の身体もまた反転していたという事実に事後的に気づかされるのである。\n\n私たちは、カメラで撮影された映像を見る際、無意識のうちに「そこに映っている身体は、重力に従った正常な向きである」という前提を置いてしまう。それは、私たちが想像しうる「手が届く範囲の身体」を勝手に投影しているに過ぎない。本作は、その認知バイアス、思い込みを逆手に取った試みである。目の前にある「本来のかたち（今回は反転した唇）」さえも、私たちは文脈による誘導がなければ正しく知覚することができない。その人間の認知の危うさと、映像メディアが孕む虚構性を、モノローグと視覚トリックを用いて体験させることを目的としている。",
  "en": "As a child, I lay with my head on my mother's lap while she gave my teeth a final brushing. Seen from below, her mouth was upside down and seemed to move like a creature separate from her voice.\n\nThe video consists of a close-up of my lips and a voice recounting that experience. At first the subtitles are synchronized with the movements of the mouth, but they gradually peel away from it, rotate, and turn upside down. The viewer is moved from watching the image to being made to read, following the moving letters with their eyes.\n\nWhen the subtitles turn upside down, the viewer realizes that the lips they had taken to be the right way up were upside down from the start. In an inverted face, it is hard to notice that something is wrong with the mouth (the Thatcher illusion). This work lets viewers experience that oversight with their own eyes.",
  "enMore": "The video begins with a close-up of a mouth brushing its teeth and the line \"Shiage wa okaasan\" (\"Mom does the finishing touch\"), a children's song phrase almost everyone has heard in early childhood. The screen is dominated by an extreme close-up of my lips. The \"mouth\" on screen begins to talk about a sense of strangeness I felt toward my mother's mouth, an actual experience from my childhood.\n\nAt first, the subtitles at the bottom of the screen are perfectly synchronized with the movements of the mouth, appearing rhythmically one character at a time. Gradually, however, this relationship of subordination breaks down. The subtitles peel away from the mouth's movements and begin to wander across the screen as if they had a will of their own: strings of letters that invite misreading with unpredictable movements. They then begin to physically rotate and flip. At this moment, the viewer's attention is forcibly shifted from \"vaguely watching the image as a whole\" to \"desperately following and deciphering the moving letters\" (being made to read). This is a device that changes the hierarchy between the image and the viewer.\n\nThe runaway subtitles finally continue upside down. Here, the content of the narration, the inverted subtitles and the situation on screen come together. As narrator, I describe the experience that \"as a child, my mother's mouth seemed to move strangely, like a separate creature,\" and at the same moment the viewer notices a startling fact: the giant lips in the background, which they had assumed were \"the right way up,\" had in fact been upside down from the very beginning. Only when the subtitles flip do we realize, after the fact, that the body in the background had been inverted too.\n\nWhen we watch images filmed by a camera, we unconsciously assume that \"the body shown there is the right way up, obeying gravity.\" We are merely projecting the \"body within reach\" that we can imagine. This work turns that cognitive bias, that assumption, against itself. Without guidance from context, we cannot correctly perceive even the \"original form\" in front of us (in this case, inverted lips). The aim is to let viewers experience the fragility of human perception and the fictionality inherent in video media through monologue and visual trickery.",
  "images": [
   {
    "src": "images/lipsync/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/03.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/04.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/05.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/06.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/07.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/08.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/09.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/lipsync/10.jpg",
    "cap": [
     "",
     ""
    ]
   }
  ]
 },
 {
  "id": "interview",
  "year": 2023,
  "tag": [
   "映像",
   "VIDEO"
  ],
  "title": [
   "Interview",
   "Interview"
  ],
  "meta": [
   "シングルチャンネルビデオ、プロジェクター",
   "Single-channel video, projector"
  ],
  "ex": [
   "令和四年度　武蔵野美術大学卒業・修了制作展、2023年3月",
   "Musashino Art University Graduation and Completion Works Exhibition (FY2022), March 2023"
  ],
  "jp": "取材を受ける私を映した、7分のインタビュー映像。質問者の姿は映らない。\n\n映像は途中で止まり、「信号なし」の青い画面が30秒ほど続いたあと、何事もなかったように再開する。音が勝手に消えることもある。どれも機材の故障に見えるが、編集でつくった演出である。\n\n終わりに近づくと画角が広がり、インタビュアーは最初からいなかったことがわかる。私の声も、すべて後から吹き込んだものだった。\n\n映像の中で私は、視力の悪さや見間違いについて話している。「見ること」の不確かさを語る映像が、止まることで鑑賞者の「見ること」を妨げる。映像が映り、音が出るという当たり前の条件を、作品の主題にした。",
  "jpMore": "卒業制作に取り組むにあたって、一つの疑問があった。\n電源がプロジェクターにつながり、映像が出力される。そこから音も出ている。鑑賞とはあらゆる細かい条件が成立することで成り立っている。しかし、映像が止まる、音が出ないなどの状況も作品としての新たな可能性を見出すことはできないだろうか。つまり、作品鑑賞における障害を作品の主題として扱い、鑑賞者に疑問を投げかけるというものだ。\n\n成立させるために、私は自身のフィクションインタビューを撮影し、編集操作によってプロジェクターの停止画面、壊れたように勝手に音がなくなるといった演出を7分のインタビューの中に織り交ぜている。\n鑑賞者にとって、私のインタビューは見えない。ちょっとしたノイズは増幅し、画面外の鑑賞者を正常な鑑賞から排除する。その時にこの作品の主題である、「見ることは何か」という至極当然の状況に直面する。\n\n作品内で語られる私の独白は、単なる身の上話のように聞こえて、映像そのものの内容に繋がっている。「視力の悪さ」や「見間違い」といった視覚の不確かさについて語るその内容は、映像というメディア自体の構造的欠陥を指し示すメタファーとして機能させた。\nこれは、コンセプチュアル・アーティストである高松次郎が『この7つの文字』において、「この7つの文字」という言葉そのものが作品の実体を説明するという「トートロジー（同語反復）」を用いた手法の、映像的実践である。高松が文字によって文字そのものの在り処を指し示したように、私は「見ることの不確かさ」を語る映像そのものを「見えなくする（停止させる）」ことで、内容と形式を自己言及的に一致させている。\n\n映像の中で「見ること」への疑義が語られ、同時に映像そのものが物理的に遮断される。この二重の構造により、鑑賞者が当初、機材トラブル（偶発的な事故）だと認識していたブルースクリーンは、実は緻密に計算されたフィクション（必然的な演出）であったことが事後的に示唆される。\n「見ること」について語る私が、鑑賞者の「見ること」を妨害する。この自己言及的なループ構造こそが、映像メディアが孕む虚構性と、それを無批判に受容する鑑賞者の眼差しを批評的に解体するための、私の一つの解答である。",
  "en": "A seven-minute interview video of me being interviewed. The interviewer is never shown.\n\nMidway, the video stops; a blue \"no signal\" screen lasts for about 30 seconds, and then the video resumes as if nothing had happened. Sometimes the sound cuts out by itself. All of these look like equipment failures, but they are effects created in editing.\n\nToward the end, the frame widens, and it becomes clear that there was never an interviewer. My voice, too, was entirely dubbed afterwards.\n\nIn the video, I talk about my poor eyesight and about seeing things wrongly. A video that speaks of the uncertainty of \"seeing\" stops, and so obstructs the viewer's own \"seeing.\" I made the taken-for-granted conditions, that an image appears and sound comes out, the subject of the work.",
  "enMore": "As I began my graduation work, I had one question.\nThe power is connected to the projector, and the image is output. Sound comes out too. Viewing is made possible only when every small condition is met. But could a situation in which the image stops or the sound does not play also open up new possibilities as a work? In other words, I would treat obstacles to viewing as the subject of the work itself and pose a question to the viewer.\n\nTo make this possible, I filmed a fictional interview of myself and, through editing, wove effects such as a projector's stop screen and sound that suddenly disappears as if broken into the seven-minute interview.\nFor the viewer, my interview cannot be seen. Small noises are amplified, shutting the viewer outside the screen out of normal viewing. At that moment, they face the utterly obvious question that is the subject of this work: \"What is seeing?\"\n\nThe monologue I speak in the work sounds like a mere personal story, yet it is connected to the content of the video itself. Talking about the uncertainty of vision, \"poor eyesight\" and \"seeing things wrongly,\" it was made to function as a metaphor pointing to the structural flaws of the medium of video itself.\nThis is a video-based practice of the \"tautology\" used by the conceptual artist Jiro Takamatsu in \"These Seven Characters,\" in which the words \"these seven characters\" themselves explain what the work is. Just as Takamatsu used characters to point to where the characters themselves are, I make content and form coincide self-referentially by \"making invisible (stopping)\" the very video that speaks of \"the uncertainty of seeing.\"\n\nDoubt about \"seeing\" is voiced in the video, and at the same time the image itself is physically cut off. Through this double structure, the blue screen, which viewers at first took for an equipment malfunction (an accident), is suggested after the fact to have been a carefully calculated fiction (a necessary effect).\nI, speaking about \"seeing,\" obstruct the viewer's \"seeing.\" This self-referential loop is my own answer for critically taking apart the fictionality inherent in video media and the gaze of viewers who accept it uncritically.",
  "images": [
   {
    "src": "images/interview/01.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/02.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/03.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/04.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/05.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/06.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/07.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/08.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/09.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/10.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/11.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/12.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/13.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/14.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/15.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/16.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/17.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/18.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/19.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/20.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/21.jpg",
    "cap": [
     "",
     ""
    ]
   },
   {
    "src": "images/interview/22.jpg",
    "cap": [
     "",
     ""
    ]
   }
  ]
 }
];

// エッセイは日本語のみ掲載。body は段落の配列（段落内の改行はそのまま表示）。
window.ESSAYS=[
 {
  "id": 8,
  "date": "2026.10.20",
  "title": "世間身体",
  "lead": "もう一度始める筋トレと、ケーキ屋のアルバイトで出会った後輩たち、そして就職活動について。",
  "body": [
   "　ふと、筋トレをしてみようと思う。いや、正確にはもう一度なのだけれども。",
   "　もし久しく会っていない友人に今の言葉を伝えたとしたら、あの楓が！？ みたいな反応をされると思う。しかも、もう一度ってことは以前もやってたの？と重ねて反応される気もする。その質問に答えるとしたら、「その通りで、以前もやっていて1年ぶりに再開するつもり」と答えるだろう。昔から線が細くて、食事もあまり好きではなかった。外で体を動かすことは中学生以降は特に苦手になってしまい、集団でのスポーツは尚更だった。だから、基礎体力をつける行為を能動的に継続していた時期があることは自分でも驚きなのである。ただ、幼い頃から水泳には通っていたから水泳の授業だけは好きだったけれども。",
   "　以前に筋トレをはじめたのは、元アルバイト先の後輩に誘ってもらったからである。\n　私は大学4年生から地元のケーキ屋でアルバイトをしていた。4年生の卒業のタイミングで、同級生の2人は卒業し新天地でちゃんと社会人になっていった。対して自分は進路を決めきれず、そのまま流れでフリーターになってしまった。美大生で卒業後すぐにフリーターをしながら、制作をメインに続けていくという人は珍しくはない（と思っている）。けれども、実質賃金が低下している東京の世の中でその覚悟で生きることは自分にはできないな、と在学中に思ったことを覚えている。しかし、当時の私は惰性という別の理由で同じ状況に陥っていた。実家暮らしだったし、結局生活面で困ることはなかったのだが。\n　フリーターとしての勤務先は正直あまり考えていなかった。そもそもこのアルバイト先も、コロナかつ卒業まで1年という、ほとんど働き先がない状況の中、友人に誘ってもらって応募して働き始めた。そういう自分の行動力の無さで居る場所なのであった。\n　そのままアルバイトを続けることができた要因の1つとして、大学卒業のタイミングで年下の後輩ができたことが大きかったし、ある意味転機だった。私が大学を卒業するということは、誰かが大学への入学を待ち望んでいたタイミングでもある。ようやく終息の目処が立ったコロナから解放され、入学間近の女子2人・男子2人の学生が、アルバイト先に新人として入ってきたのだった。と言っても急にできた後輩の扱いには慣れておらず、当時まだ21歳で偉ぶるほどの人生経験もないため、結局は同い年のように接していた。学生という立場でずっと生きてきたから、人の上に立つということは当時は想像がつかなかったし、今もそれは同じだ。\n　筋トレもとい、ジムに誘ってくれたのは、男の子の後輩の一人だった。彼とは連絡が取れないし、今なにをしているかもわからない。だから、仮にSくんとしておこう。Sくんはまるで平成のドラマから出てきたような、そんな男の子だった。茶髪で、ツンツンした髪型で（調べたらスパイキーショートというらしい）、時代に逆らうような焼けた肌で、本当にドラマの主人公そのものだった。\n　当時、定職にも就かず、ふらふらと生きている自分にとって、彼はあまりにもエネルギーに溢れていた存在だった。店内にお客さんがいなくなるとよく話しかけに来てくれて、閉店後に食事に行くこともあった。それまで経験したアルバイト先はもっと殺伐とした雰囲気だったが、この職場ではある程度の交友関係にまで発展する人間性の良さがあった。それをさらに彼が牽引していた気がする。学業はさておき、ジムに行き、恋愛をして、朝から晩までアルバイトをして、取ったばかりの免許で郊外に遊びに行く、そんなことをSくんは話してくれていた。私はコロナ禍に大学生だったから、いわゆる世間の思う大学生としての過ごし方は自分にとって未経験で、新鮮な話だった。一方で、今までずっと体力がなく生きてきた自分を心底恨みそうになった。\n　細かい経緯は覚えていないけれど、Sくんがトレーニングジムに行ったことによって、筋肉がついたことを元気に話してくれた日があった。そして「行きましょうよ！」と数回に渡って声をかけられていた。自分に体力がないと自覚していたこと、フリーターで時間の余裕があったことが重なって、体を鍛えることは良い転機になると思ったのだった。Sくんと勤務時間が被ったある日、詳しいことを教えてもらって同じ24時間営業の地元のジムに契約することにした。\n　契約してからは、バイトの日が被るたびに一緒に行っていた。Sくんがバイト先に車で来た日には、ついでに乗っけてもらうこともあった。私はペーパードライバーなので、彼の車に乗るたびに情けないな、と思っていた。親の車のためか選曲が古く、80年代の曲がよく流れており、BOØWYの「Marionette」なんかは乗るたびに流れていた。",
   "　色が白くて、髪の毛は真っ黒にバサバサと生える自分がいる。Sくんは髪も茶色く染めていて猫っ毛らしい。隣に並ぶとゲームのキャラクターの容姿をカスタマイズしている最中みたいだった。ところどころ対照的な彼を見ると、羨ましくなる。元々、きっと私は欲しがりなのである。自分が持っていない人間的な部分が欲しくなる。それは人が食べているお菓子が欲しいなどという子供じみたことではないが、突き詰めていくと本質としては似たようなものだと思う。スカートを履いて路上をかつかつカッコよく歩いてみたいし、髪も腰の下あたりまで伸ばしてみたい。多言語を話す友人が、空いた時間にフランス語を勉強していたら、背伸びして英語で話しかけたくなる。そうなった別次元の自分の様子を見てみたいのである。\n　しかしその欲望は、世間体という大きな色眼鏡で見られるのを恐れて、自分で抑え込んでしまう。逆に、世間体が背中を押すときもある。時間やきっかけがあれば、別の自分になってみたいという欲求は常にどこかにあったんだと思う。その欲求を、いちアルバイトの後輩からの筋トレの誘いを無理やり契機にして実行してみたのかもしれない。体力をつけること、健康的な体つきになること。いつからかずっと望んでいたことだった。\n　街を歩くとジムがどんどんできていて、SNSを開けば、ボディメイクを発信する人が増えている。フィットネス関連の広告もよく流れてくる。一度でも画面に触れて少しでも見ればアルゴリズムによってさらに類似の情報が溢れてく。体を鍛えることは、社会に迎合する意味にもなるのだと思う。忍耐力や体力の提示でもあるし、延いては向上心のアピールにもなる。あなたの会社では、犬のようになれるよう準備しているんですよ、と差し出すことができる。その時期に社会に出る準備を始めた自分にとって、見かけが良くなるという好都合さもそこにはあった。　",
   "　＊＊＊",
   "　ふと、就活をしようと思った。",
   "　というのは全然嘘。私は将来への不安から、フリーター生活をあっさりと手放し、安定した収入がある状況を作り出すために就職活動をはじめた。非正規雇用として生きていくことを、親にはどこかよく思われていないのではないかと、ひどく心配していた。世間的に見たら、まだ20代そこそこで定職に就いていないただの若造なのだが、このままでは、この先社会的に生きていくことはかなり難しいんだろうと、思っていた。世間からの風当たりを勝手に想像しては不安を増幅させ、自分で自分の首をよく絞めていた。\n　私は無駄に心配性で、しかも朝から晩まで働いている共働きの親の元に生まれたから、やはりこの状況は良くないと思ったのである。自分の性格は楽観的で能天気だと思っていたけれど、どちらかといえば心配性で現実主義だったことに気づいた。後先考えないで『どうにかなるでしょ』精神は、きっと才能なんだと思う。いや、心の奥底ではもうとっくに気づいていたのかもしれない。どこかに親の視線を感じずにはいられず、行動範囲を狭めてしまっていたことにも、だ。惰性で就職をしなかったわりには、その惰性すら続かず、結局惰性にならなかった。数年遅れたとはいえ、親の引いたレールを結局走りはじめたと思った。なんともすごい理由で就職したものである。そして就職活動はすぐに終わってしまった。不安がっていた経歴の余白は、早生まれであることも幸いしたのか特別問われることはなかった。今までの不安は杞憂だったのだ。",
   "　就職先は都心で、実家からは1時間40分ほどかかる。実家の周りは、東京の割に建物間が広くて、緑もあって住みやすいと思っている。だからどうして、みんなこの辺の土地に住まないんだろうと思っていたが、都心からのアクセスは本当に悪かった。定時で上がっても平日はほとんど時間が取れず、土日も予定が入るときもあり、地元のジムに行けるのは週2回が限界だった。なんとなく週の半分を目安に通っていたジムへは、通う頻度が徐々に落ちていった。どんどん仕事も忙しくなり、帰りは遅くなる。長い長い通勤時間は時間効率化を求める社会においてすごく不利だ。就活のタイミングで始めたジム通いは、通勤時間が主な原因でやめることにした。ただでさえ体を動かすことに能動的ではないから、筋トレを続ければよかったな、と辞めた後に思った。社会人の慢性的な運動量低下という問題は、当事者になってみてはじめて気づく。郊外のベッドタウンは、比較的安く生活しやすい反面、通勤に時間がかかり個人の自由な時間というものは減っていく。こうやって子供のときに考えもしなかった生活面での問題に触れたときに、自分は社会的に大人になってしまったことを実感する。",
   "　再びジムに通おうと決断したことにはいくつかの理由がある。一つは、就職して1年半が経ち、会社からほど近い場所で一人暮らしを始め、長い通勤がなくなって時間ができたこと。また、都心のジムの多さは凄まじく、歩いているだけで看板や広告が目に入ってくる。このしつこいマーケティング手法によって、誘ってくれたSくんはいなくても、再開した方がいいとさらに思うようになった。そして、働き始めてから、改めて自分に全く体力がないことを認識していたこと。昼休みは食事後に突っ伏してよく寝てしまうし、残業で19時を過ぎると疲れからか、単純作業以外にはなかなか身が入らないのだった。\n　もう一つ別の理由がある。それは、社会に出てからより一層、体の小さい男性は見下されるのだと、常日頃感じていたからである。抑圧的な態度の先輩を見ていて、私以外への態度の違いをよく感じていた。それは年齢や職歴の差が前提とはいえ、性別、体格による影響も感じずにはいられなかったのだ。私は背も高くなく、相変わらず細い。声も高いから、威厳がないように聞こえることはきっと多い。先輩のような人は、あらゆる点から、無意識に人の弱さにつけこんで来るのだろうか。\n　就活中、あらゆるホームページや募集サイトを見て、楽しそうでキラキラしていて、どの会社も面白そうに見えていた。今は働き方改革によって、年功序列の慣習がなくなりつつあると勝手に思っていた。そういえば、私はこの会社のボトムアップな風潮に憧れていたんだっけ、と思うこともある。部屋を片付けていたら、エントリーシートが出て来て、見返すと随分と尖ったことを書いていた。あの時の不安と緊張感と\n情熱は、どこへ行ってしまったのやら。会社には期待して入ったし、面接の評価も(後々聞いたら)良かったらしい。けれ\nども、まるで人に裏切られた時のようなこの気持ちはなんだ",
   "ろうか。",
   "　＊＊＊",
   "　地元のケーキ屋での勤務は最終日を迎えた。卒業祝いとしてアルバイトに誘ってくれた友人からは大きな花束、お店からは腕時計をもらった。どうやらみんなでお金を分担して購入してくれたらしい。夏の終わりの鮮やかな向日葵と、カシオの紺の文字盤の腕時計。Sくんからは個人的にバケットハットをもらった。他にもいくつかプレゼントをもらって本当に嬉しかった反面、もうここから離れるんだと実感した。そして勤務を終えて店を出たとき、学生生活が終わったような物悲しさがあった。就職活動を終えたということは、フリーターとしての生活が終わることも意味していた。その学生生活は、自分がコロナ禍で過ごした窮屈で隔たりのある世界とは別世界で、ごくごく一般的で、コロナのない学生生活である。そういえば、いつの日か男子ってほんとに仲いいよねー、と店長が勤務中に話していた。仲が良かったのは閉鎖的だった自分に対して、彼らが開放的に接してくれたからなんだよ、と今でも思っている。\n　Sくんの車で流れていた「Marionette」に有名なフレーズがある。\n  ”鏡の中のマリオネット  ”\n　そういや、どういう意味なのか気になり、歌詞について調べた。どうやら、他人の目や社会のしがらみ、誰かに操られるように生きている自分（鏡に映る人形＝マリオネット）を抜け出せという意味が込められているらしい。",
   "　毎朝、よそ行きの服かスーツをまとって、髪を整え、時計をつけ、靴を結び、出社する自分がいる。納税と勤労の義務を背負った自分をガラス越しに見ると、歌詞の通りの操り人形かもしれない。左腕には、しっとりとした紺の文字盤の上に、よく聞くと秒針がカクカクと音を立てている。"
  ]
 },
 {
  "id": 7,
  "date": "2026.09.27",
  "title": "暦がえし",
  "lead": "深夜2時に目覚めて出かけた夜と、金縛りの夢、そして父の還暦について。",
  "body": [
   "　2時ごろに目覚めてしまった原因は、PCに接続されたモニターが省電力モードになっておらず、スタート画面がずっと表示されたままだからであった。本体のPCがスリープモードに入ればモニターは信号なしと判断して画面から光が消えるが、本体PCを閉じてしまうとむしろ稼働したままになってしまうらしい。しかもランダムに変わる壁紙は、好んで青い空の風景写真ばかりにしていた。さらに、このPCモニターは接続されている間、背面の4つ角が光る仕様になっている。近未来を象徴するようなまさにライトブルー。寝ているロフトの手すりの下から思いっきり漏れて睡眠を邪魔してきている。自他ともに、いやPCと共にスリープモードに入ることができなかったわけだ。休日の夜更かしは大歓迎だが、平日ともなると話は変わってくる。普段は社会の一員として働いているわけだから、睡眠不足で仕事に支障が出るのはごめんだ。\n　もう一度寝るか……。\n　とは言いつつも、眠気を感じない。綺麗に覚めている気がする。レム睡眠とノンレム睡眠が切り替わるタイミングで起きるとスッキリとした目覚めになると聞いたことがあるが、おそらくそのタイミングだったのだろう。横目に時計を確認する。出勤まで5時間と言ったところか。起きてすることもないが一旦睡眠妨害の原因を解消するべきだ。ロフトを降りてデスクに向かい、ようやくPCの電源を落としモニターも消える。部屋が狭くて机の角に足をぶつけて痛い。じゃあ、近々コーナーガードを買いに100均に行くべきだと思った。現在時刻は2時を回っている。そういえばと、24時間営業の100円ローソンにダイソーコーナーが存在していることに気づいた。さすが都心部だなぁと思う。そして100円ローソンは自転車で10分もかからない位の場所にある。じゃあ今行くしかないと決断した。",
   "　まだ実家に住んでいた頃、夜に出歩きたいとつくづく思っていた。だが、親が心配するのでいつもできなかった。高校、大学と年齢が高くなるにつれ、帰りが遅くなることも増えていく。一人での帰路が楽しくて違う道を探して遠回りでよく帰っていた。社会人になり会社の帰りがかなり遅くなった時、最寄駅から家までの帰路で、住宅街が近づくにつれ人がほとんどいなくなっていく。自転車を漕ぎながら感じるのは、満員で乗り換えるターミナル駅とのコントラストだった。1人だけの帰り道で、夏は湿気で余計に暑く、冬は寒々しくて余計に寂しい帰り道。何千何百回と繰り返しているが写真に収めたことはほとんどなかった。ここは実家ではないけれども、もし撮っておいたら後で見返すと面白いことがあるかもしれない。往復で繰り返していく景色を記憶のまま留めておくと悪い癖で感傷に浸るだけで終わってしまう。そこまで撮る気はなかったが、せっかくなのでカメラを持って外に出ることにした。今の時間に出かけても、もちろん心配されることもないのだから。",
   "　今年の夏は涼しかった。カメラを首にかけて玄関の扉に鍵をかけ外に出たとき、過ごしやすい気温だとまず感じる。同時に実家周辺よりも夜明るいことにも気付かされる。相対的に街灯の量が多いのだろうか。家の近くには大通りがあり、千代田から杉並までつながれている。車通りといっても、今の家の付近は片側1車線でそこまで交通量も激しくないはず、と思っていたけれど、真夜中にもかかわらず断続的に自動車が通る。荷下ろしの車は仕方ないとしても、タクシーが多く終電を逃している人が乗るのかと思う。大通りと住宅街への入り口をつなぐ角には交番がある。ふと交番を撮ってみる。いつ見てもこの交番には人がいないから、意味があるのかと毎回思う。それともパトロールをずっとしてくれているのか、なんて思う。進んで環状6号線に出る。ここは整備されていて、自転車道と歩行者道に分かれているからサイクリングがしやすい。駅が近づくにつれて飲食店が多くなり、荷下ろしのトラックを照らすまばゆい光たち。街灯も増え、夜だけど街は眠っていないようだ。家の周りが結構静かなため、駅前の賑わいとのギャップに驚いた。ただここも一応住宅街に面していて、駅付近にはマンションもある。高層のオフィスビルもある。あらゆる〇〇がぎゅっと凝縮されて東京という街は存在していると、オレンジの街灯に照らされた空を見る。\n　そうこうしているうちに目的の100円ローソンに着く。とりあえず物色をはじめることとした。レジ前の割引コーナーでは袋麺のトムヤムクンが100円引きなのを見かける。買おうかなと思ってちょっと後回しにする。ダイソーコーナーではコーナーガードを探す。しかし全然ない。仕方がないのでもう一度店内をうろつき、欲しいものがないかずっと探す。そしたら意外と眠くなっていたことに気づいた。悩んだ末にもう一度、割引コーナーを物色するとカップに入った水飴が大量に隠れている。ふと、中学の時に水飴が好きだったことを思い出した。好きというか、幼なじみが家に来るたびにお土産として渡してくれていたからだった。なんでくれるのかよくわからなかったけど、もらったので流れで食べていた。ちびまる子ちゃんの漫画で水飴を練り回して食べるシーンがある。ずっと回していくと白くなっておいしいよね、とたまちゃんと話していた。その場面が印象的で、水飴を食べるたびに頑張って白くしたいとこねくり回していた。けれど、当時の自分が下手なのか白くなったことがあんまりない、というか白い状態がよくわからない。ずっと回しても明確に変化していって白くなる気がしない。幼なじみも同じくゴールが分からず結局二人とも食べる。水飴を白くすることを求め、二人で学校帰りに家で何度も繰り返していた。\n　店内を巡ってようやくフェルトガードと衝撃ガードだけを見つけた。どうやら机のコーナーガードはここには売っていないようだ。100円では買えないのかもしれない。目的の商品がないのなら帰る他はないだろう。しかし、何も買わないのもどうかと思ってしまった。結局、目に留まったトムヤムクンと水飴を買うことにする。割引商品なのでセルフレジで購入はできず、深夜にわざわざ店員さんを呼び出す、この罪悪感。レジに通してもらうと、合わせて507円もした。高！100円引きじゃなかったのか。割引がないとトムヤムクン3袋入りで577円もしたらしい。こんなにも物価高が進んでいるのか。それともこのトムヤムクンはタイからわざわざ輸入してるから高いのか。どっちにしろ高いなぁと思ったがキャンセルするわけにもいかずそのまま購入して退店。店の目の前には、朝の回収に向けて段ボールがコンテナに積み上げられている。うっすらと外が明るいのは、明けが近いのか、街灯と走る車のヘッドライトが多すぎるからなのか。もう眠気がすぐそこまで来ている。早く帰ろうと思う頭と別の道を通ってみたい身体が自転車を漕いでいる。家までの方角を考え、別の細道へ入って帰る。結局、いつもの道に出てしまって、いつもの道で帰ることにする。いつもの大通りに出て、いつもの細道で家に着き、ロフトを上がる。まだ時間はあるから、と思いベッドで横になる。",
   "　＊＊＊",
   "　夢を見た。二度寝をすると必ずといっていいほど夢をみる。それは友人たち数人と出かける夢。きっとこの夢を見たのは、数日後に、赤ちゃんが生まれた友人の家へ数人で遊びに行く予定が迫っていることが、頭のどこかにあったから。\n　その中では、車でどこか出かけてそれぞれ買い物をして合流する。けれども、自分の買い物が多すぎてなぜか友人たちと合流できない。戻ろうとしたら買い忘れが次々に浮かんでくるから、車に戻れない。その繰り返し。あれも買わなきゃこれも買わなきゃと思い出しては店にとどまってしまう。しかも遅くなるって連絡してないのである。連絡が必要なはずなのに。そして覚えているのは、何故か必死に酔い止めを探していたことだった。なんでこれは酔い止めじゃない。酔い防止なんだ。欲しいのはただの酔い止めなのに。なぜかよくわからず何種類もある。どこの薬局やドラッグストアやコンビニを駆け巡って酔い止めを探す。しかしいわゆる普通の酔い止めがどうしても見つからない。もがいていたのに急に諦めかけ、帰り際に自分は居る。そこでリアルな子供の人形を背負ったサラリーマンに遭遇する。気になって彼がマンションから自室に入るところまで目で追っかけてしまうんだ。その扉を開けたときに、嫌な予感がするんだ。その後ろに背負われている人形がふっと首を回転させこっちを見てきて目が合ってしまうんだ。しかもその人形はすごくリアルに作られている。こけしがリアルになったような風貌をしていた。",
   "　ハッと気づいたらここはロフトの寝床だった。右側に光っているのは、道しるべ。それは不思議で温厚な色をした光を放っている。焦って手を握ると怪しげな紫と緑の混じった色のおどろおどろしいエフェクトが出る。ここは果たしてゲームの世界？ドラマの世界？アニメの世界？ちょっとよくわからないんだけど、このエフェクトが怖いと感じている。緊張しているから右手を握り、道しるべの光の上からエフェクトとして放出される。仕組みがわからないけど、これは怖いんだ。ゾクゾクとしていて、背中にはじんわりと汗をかいている。さっきの子供は見てはいけないもの。きっと幽霊か何かで自分に乗りうつってきたんだと。いや、真夜中の2時に出歩いたから変なものが憑いてきてしまったんだと思った。どうしよう、ここはロフト、いつも寝ているベッド。監視カメラのように部屋を見渡せるけど体が動かない。そう、もしかして金縛りじゃないか。ようやく人生で初めて金縛りに遭っていることに気づいた。どうしよう本当に体動かない。これって夢？それとも現実？ここってどこなの？……やはりよくわからない。だけど、きっと体が動かなくて、目の前にはいつもの景色が広がってるって事はやっぱり金縛りなんだ。焦っているのが自分でもよくわかる。底なし沼にはまったとき、怒られるとわかったあの瞬間。割れ物が手から滑り落ちたタイミング。そんな類。",
   "　仕組みはわからないけど、手を握ると何故かエフェクトが出て、右の光の道しるべに照らされる。そう、できることは、この状況から抜け出すことは、きっと叫ぶことくらい。じゃあ何を叫ぼう？なんか叫ぶ。何叫ぶのがいい？\n　今、インスタのリールで流れてきた港区女子の地獄みたいな飲み会でおこなわれるコールが脳裏に浮かんでいる……。声が出ないけど、それなら出せるかもしれない。\n　……タータラッタータータ全身全霊タータラッタータータあっちむいてホイ。はい、ゆうきの喉元潤ってねーじゃん、サンバールンバーリオデジャネイロー。イエーイ。…\n　いやうまくしゃべれない。しゃべれていない。頭では全てわかっているのに、声が出ない。\nもう一回。\n　……タータラッタータータ全身全霊タータラッタータータあっち向いて……\n  「……ホイ」\nしゃべれた。夢から目覚めたんだ。金縛りは解けた。右側の光は自分の寝室の間接照明だった。ただ消し忘れてただけだった。形のない道しるべはただの光か。夢から覚めて部屋の解像度が上がる。全てただの夢だったんだと時計に目をやる。現在時刻は朝の6時過ぎ。今日は9月2日か……。父の誕生日で、さらに還暦を迎えていることに気付き、お祝いのLINEしなきゃなぁと思った。"
  ]
 },
 {
  "id": 6,
  "date": "2026.08.16",
  "title": "YからZ",
  "lead": "社長からの伝言、隣の席の先輩、そして「Z世代」と呼ばれることについて。",
  "body": [
   "　車内を見れば、どこも見ていない顔で立ち、背広を着たサラリーマンがどこもかしこも立っている。私は、今日も降りそうな人に目をつけ、拝島駅で入れ替わり、さっと席に座る。朝日が青く変わる中、ふと目を横にやると何が面白いのかわからずにでかでかときな臭いバナー広告が出現するWEB記事や、意味のわからない海外のショート動画、夢の世界のようなパズルゲームで周りは時間を潰していた。私は通勤で毎日1時間以上電車に乗っていて、まだ引っ越す前、平日に何度もこの光景を繰り返し見ていた。",
   "＊＊＊",
   "　私の会社の社長は突発的に行動する。事業も、業務も、人への注意も。そしてすぐにそれを忘れる。そんなことは社内のみんなが知っている。今回たまたま、私が目につく行動をしてしまったのだ。",
   "　昨日の昼頃、私は会議に遅刻しそうになって慌ただしく自席を離れた。拍子に私のペンケースが、左隣の席に転がってしまった。加えて、整頓されていない自席がだらしなく見えたようだ。その状態が社長の目に留まってしまい、右にいた先輩に伝言された、「高木くんの左の席、入口で、インターンやアルバイトの方も使うので使わないように。」と。加えてご丁寧に「社長からです。自分の机から侵食しているものも含めて。」と、先輩からチャットが来たことを確認した。\n　あーやらかした、と思った。私は、片付けられなかったことを自席を離れる直前に思い出していたし、もちろん会議後すぐに戻すつもりだった。ただ、その気持ちを誰に伝えても、言い訳にしか聞こえないと思う。",
   "　私が彼からの伝言チャットを見たのは、会議が終わってからのことだった。私は、どんな反応をしても彼の性格なら絶対にしつこく言ってくるだろうなと思い、チャットのリアクション機能で「承知しました！」というスタンプで相手のメッセージに反応し、会話のキャッチボールが始まらないように自分を防御した。",
   "　1階の会議室から7階の自席に戻る。私が隣席に来たら「ねえ、チャット見た？見た？わかった？わかった？」と急に話しかけてくる。「わかった？わかった？」とこちらの反応おかまいなしに、聞いた注意を何度も繰り返してくる。もはやここまで来ると、会話ではなく、私に対して言葉を咀嚼させることが彼の目的になっている。\n　今回の指摘事項が社長からの連絡であれば尚更それは彼にとっての絶対的な正義だ。どれだけくだらなくても、相手へのダメージが大きくあっても強く相手を非難することが今の彼にとっての正義なのだった。私は知っていた。こちらに非があるとわかると、彼は絶対的な正義だと思って強く非難してくること。ときにその正義感は、是正から暴力になること。けれど、その日はそれ以上の追求はもう何もなかった。",
   "　翌日、いつも通り朝8時に出社する。エレベーターで7階に上がって、ドアを開けると、左から空席、私の席、先輩の席が見える。背が高いせいか椅子が合わず、腰を曲げた彼がいつものように私のデスクの右隣に座っていた。そして、デスクにいるのは彼だけ。マネージャー陣が隣の会議室に集まっていた。先輩は、たまたまその日不機嫌だったのか、それとも昨日の私の態度が気に食わなかったのか、なんだかイライラしているように見えた。\n　でもそんなことはお構いなしに、私は昨日から続けて宛名書きの作業をする。大きい封筒、A4がすっぽり入るサイズに。先輩はどうもそれが気に食わないらしい。右隣から急に「はみ出してたらまた言われるよ！」と声をかけられた。\n  「え……はい。」\n　とりあえず返事をする。そして訝しげな顔をしてしまう。状況を整理してみると、左隣の空席に、封筒の端が数センチ侵食していることが気になっていたようだった。しかし私は仕事を続けていく。そのまま手を動かして、宛名を書いている間に心を落ち着かせ、思考する。きっと、そんなに悪いことじゃない。というかどう考えても注意される理由が見つからなかった。誰にも迷惑はかかっていないし、左の空席の机上は整理されている。誰かを引き合いに出すわけじゃないけれど、自席の後ろが窓の人なんかは書類や本をたくさん積んでいるし、床に本を置いたりして、迷惑にならない範疇で侵食している人は居る。そもそも、単独業務が多い今の会社ではそれを気にする人の方が珍しい。むしろ、入社したばかりで荷物が少ない私は一度も荷物が散らかっていない。今のどこに注意する要素が…？そう思い、もう一度心を落ち着かせた。\n　瞬間、立ち上がった先輩が、書き終わった封筒を取り上げ、ばんっと机に叩きつけてきた。それは、まるで昭和のドラマのワンシーンにあるような出来事だった。現代にそぐわない、いわゆる昔の上司のような行動をされて、本当にびっくりしてしまった。一瞬何が起きたのか理解することができず、私は続けていた宛名書きの手が止まってしまった。反射的に先輩の顔を見る。\n 「なに？言いたいことがあるならさ、言ってくれば」 と隣の会議室に社長がいることを指し示す。\n  「いや、別に…。」さっきの出来事に驚いてまだ声が震える。\n  「じゃあさ、ちゃんとしなよ！」と彼は言い放つ。\n言いたいことは山ほどある。さっきの妄想が頭を駆け巡る。でもそれは社長にじゃない。権威という暴力を振りかざすあなたに対してだよと思う。今ここには彼と私の二人しかいない。反射的に顔を見てしまったのは、年下の同性の後輩なら言い返してこないだろう、という底意地の悪さを確かめたかったからだった。\n　全社朝礼の時間が少しずつ近づいて、一人また一人7階に出社してくる。おはようございます、と誰かが声を出すたびにさっきの出来事がうそみたいに空気の中にかき消されていくことを感じる。記憶の中にだけ、じんわりと刻み込まれていく。紙で切った指先から少しずつ血が滲んでいくような、そういう痛み。",
   "　世代が離れるほどの歳の差がある人が、社会生活においてそこまで大きくもない出来事に対して感情をコントロールできないこと。見ていて呆れてしまい、同時に、自分に対してもそこまでのレベルは求められていないのかもしれない、という安堵さえ覚えた。",
   "＊＊＊",
   "　先日、ちょうど10年前に宮藤官九郎脚本のドラマ『ゆとりですがなにか』をみていた。\n　岡田将生演じる主人公・坂間が、ゆとりモンスターである部下・山岸のミスをひどく叱責する様子が1話の後半に描かれる。モンスターである山岸は坂間に対して「はじめてちゃんと叱って貰えたような気がしました」と述べる。しかし翌日に山岸が出社せず、彼とは全く連絡が取れなくなり、坂間は不安になる。ふと彼とよく似た特徴の人物が飛び降り自殺したというニュースが流れ、坂間は病院に駆け込み1話は終わる。先に言っておくと、これはパワハラやモンスターと呼ばれる新入社員にフォーカスしたドラマではない。（社会情勢として当時話題になっていたものをドラマの節々に取り入れているドラマ）\n　10年過ぎて気づいたらゆとりという言葉は死語も同然になり、いわゆるゆとり世代（第一、第二）は30代半ばへ突入、現在はアラフォーの世代になり結婚や出産を経る方も多い年代になっている。私のようなミレニアムベイビーはゆとりの終盤期に出生。今では、どちらかといえばZ世代と言われる年代だ。",
   "　5月は桜の木は花びらが散って葉桜になっていた。まだまっすぐとしたスーツを着た男性、髪を後ろで結び、履き慣れないヒールを履く女性。行きの総武線の車内から画一化されたような人々がズケズケと歩き、ざらりとしたコンクリを蹴って歩く彼らを見ていた。\n　私は、この服がそこを歩く誰のからだにも馴染んでいないことを知っている。中学生のときから、着させられる服がとても嫌だった。制服を着ると去年まで小学生だった私たちを「社会の一員なんだから」と急に見せしめにされる。アルバイトすらできないから、所得税すら納められないのにいったいいつから大人にさせられたんだろうか。社会人でスーツを着て大人にさせられる。コンクリと密集したビルで東京はもう暑い。冬はどんなに寒くてもコートを脱ぎ、人前では同じような服で外に出なければいけない。この服は、冬の寒さには全く敵わない。",
   "　＊＊＊",
   "　その日、先輩は私の言動が気に食わなかったのか、またなにかしら注意をしてきた。おそらくその日も私は納得がいかないため言い返し、絶妙な空気感のまま二人で会社に残っていた。こういった一つ一つが本当にストレスだ…。と正直、うんざりしていた。\n　そうしたら、遠くの席にいた編集長が話に入ってきた。あれ、そんな小さかったっけ？と私に話しかけてきた。私は席に深く腰掛ける時があるため、そう見えたのかもしれない。そうやって編集長は、他愛もない話でその場の雰囲気を収めてくれた。ガハハと笑う編集長は、気づいたときにはもう退勤していた。空気が和んだこともあり、私もひと段落したため退勤の準備をする。彼にも先輩としての体裁がきっとあると思い、「今日は失礼な態度を取ってすみません、引き続きよろしくお願いいたします」と、愛想があるのかないのかよくわからないことをチャットした。この行動は、今思い返してもなぜ起こしたのかわからない。",
   "　そして先輩を後にして、会社の最寄り駅から、乗り換え先の新宿駅に向かう電車に乗った。疲れてほっと息をつき、腰を下ろすと、向かいの席には先輩が座っていた。え、何故と思ってしまったが、あれお疲れ様です、と挨拶をする。\n　1分も経たないうちに新宿駅に到着し、乗り換えようとすると、\n  「今日さ、家でご飯とか用意されてるの？」\n　と聞かれ、\n 「いや……まあ」と先ほどの雰囲気を思い出し、うまく言葉が出なかった。\n  「どっか飲みに行かないかと思って」\n　先輩は飲みに誘ってきた。\n  「あっ、あ…….じゃあ行きましょう」と返す。\n　断ったらそれこそ、今の若い子と揶揄されるのかと思ったから、彼に着いていくことにした。",
   "　すらっと高い背の彼についていく。ゴタゴタとした金曜日のJR新宿駅。いやはやいやはや、そうそう、これが社会人というものなのだ。叱られることも飲みに行くことも、含めての人付き合いなんだと勝手に解釈する。\n　上司と後輩は酒を酌み交わして仕事の話をする。思いかえせば、少し前まで自分はフリーターだった。大学卒業後すぐに社会に出る自信がなく夢や希望すら考えられなかった自分にとって、お金を稼いでこういったことをするのは新鮮だった。東京のサラリーマンはこうやってお金を落としていくんだと思った。世の金回りのシステムをこうやって学んでいく。",
   "このエッセイを書いていても、主要な会話以外は思い出せなかったので、当たり障りのない話をふられ、当たり障りのない回答をしていたのだと思う。そこで意を決して、\n  「今までの後輩で、どんな感じですか僕は。なんというか……こう。」と変に突っ込まれないようにしているうちに言い淀んでしまった。\n　この質問をした意図は、あなたの下でまともに応対できた後輩は他にいただろうか、と思ったからである。粗探しばかりするような昭和的な指導法で、彼の下だと誰もが自己肯定感が下がるはずだと思ったからである。\n  「この子は、まぁーーー結構大変な方だなあと思ったね。」\n　あっ、と思った。私はきっと彼にはものすごく下の存在に見られていると感じたからである。同時にそんな野暮な質問をして試そうと企んだ自分は、彼を見下していたんだと自分の希薄さも突きつけられた気がした。きっとこんな野暮な話で、尽きたお酒と、残り少ないおつまみに飽きたからごまかしの話をしてしまう自分が悪い。\n　その当時、転職活動をしていた女性の友人を会社に誘っていることを話した（後に彼女は正式に入社するのだが）。\n　彼はすぐさま\n  「え、好きなの？」\n  「付き合ってるの？」と囃し立ててきた。\n　うるさい店内だし、周りに知り合いは誰もいないのだけれど、経験したことのないデリカシーのなさに遭遇し、背中にゾワっと汗をかくのがわかった。\n 「そういえば、人と付き合ったことあるの？ どっちが好きなの？」「あっそうなんだ、へー。」\n　彼の取材で身につけたであろう、表向きのリアクションが、すごく胡散臭く聞こえる。\n　入った居酒屋では、もう2月の真冬だというのに秋の味覚【マコモダケ巻】を店員が、店内POPが店のメニュー表が勧めていた。さっき放った彼の言葉ひとつひとつが、浅薄に思えてずっと脳内を旋回する。\n　マコモと聞いて、一つ思い出した。それは、インスタでマコモの葉や発酵粉末、エキスを入れたお風呂を一年半替えていないというショート動画が回ってきたことだった。それを紹介する本人は、正しいと思って世にそのよくわからない節約健康法を勧めている。皮脂か成分かもわからない薄黒い泥のような風呂場を見せられても、視聴者に対して信ぴょう性やエビデンスに欠け、コメントでいろんな人に衛生観念を指摘されているのだった。\n　先輩の言葉を聞いていると、薄暗い泥に沈められた気分になる。こちらの声が、重い土と汚れた水に阻まれる。息ができなくなっていく。相手から発せられた言葉は底なしに身体にまとわりつく。感情にまとわりついてくる泥がここにはある。なんというか、こんなものなのだと、社会は。形容できない感情がどんどん積み上がっていく。人との接し方がわからなくなっていく。なんて返答したかさえも、覚えていない。",
   "　後日また飲み会があった。今度は部署の飲み会だった。メンバーは上長と女性社員が二人、私と例の先輩。ここでも何を話したのか、よく覚えていないのだけれど、記憶に残っていることがひとつ。\n  「あっそうだ 高木君って、ちゃんと女の子が好きなんですよ〜」と話の途中で彼が言い出したことだった。\n　女性社員の一人が\n  「ちゃんと、っていうの、よくないと思います」と手を挙げて言っていた。上長も、 「確かにそうだー！」とか言っていたと思う。\n　また、泥のようなものがまとわりついていく感覚が生まれていった。先輩はきっと自分の考えの及ばないことは一切肯定できない人なんだろう。キッパリ言ってしまおう。指摘を受けて若干バツが悪そうな彼を見て、こんな人でも年齢を重ねれば先輩として認識しなければいけないんだなと思った。\n　もし私がヘテロセクシャルでなかったとしたら、彼にとってそれは私を侮蔑できる要素の一つになっただろうか。私がどんな気持ちで心の奥で恋愛をしていても、誰のことを好きになっても、彼はそういった配慮を今後もしていけるのだろうか。誰かの恋愛観や外見がどんな属性を帯びていたとしても、どう多様に変化していっても、彼は彼が知っている以外の世界を受け入れていく気がしなかった。私はお酒で記憶がなくなることはないタイプだが、その日の飲み会がどこまで行ってどこで終わったのか記憶には残っていなかった。",
   "　＊＊＊",
   "　かつて社会から「ゆとり」と名指しされた世代が、今は社会の中で後輩を指導する側に回っている。先輩はあの時のゆとり第2世代だ。2002年に行われた教育改正を受け、完全週5日制。授業内容、時間数削減。絶対評価導入。そんな学生時代を過ごした彼ももうすぐで30代半ば。アラフォー。ゆとり世代から見たら、昭和末期生まれの上司は、厳しく体育会系で、権威主義。そんな時代を経て私のような後輩には丁寧に、親切に、プライベートも話せる仲として打ち解けようとしてくれたのだろうか。\n　ドラマを見ていて思ったことがある。きっとゆとり時代は、デジタルの普及が当たり前になった世代で、仕事や業務より自分のやりたいことを尊重された世代なのだと思った。週休二日の学生時代でゆっくりと日常を過ごしていたはずだ。当時でも円周率が3.14なことは義務教育以降で明らかになるはずだし、学力において優秀な人も、増えた休みで学業以外の感性を磨いた人もいるだろう。結局、時代の変化によって社会に不都合が生じた際に、政府の施策への不満や若い世代の社会への適応不足を総称する言葉が欲しかったのだろう。\n　世間のスタートラインから少し遅れて入社した私は、10年社会人を経験した彼らにとってZ世代のモンスターとして映るのか、それとも彼のような先輩が抑圧的なのか。誰か答えを教えてはくれないだろうか。",
   "　翌日、またいつものように早朝に電車に乗る。昨日は飲み会があったから少し寝不足だ。今日も息を切らしながら自転車を漕いで福生駅に向かい東京行きの電車に乗る。今日は運が悪く、拝島駅で席には座れなかった。今日は座れなかったから、目を閉じてぼーっとすることもできない。仕方なく時間を潰すために携帯を開く。昨日見ていたWEB記事の広告が開いていた。そこで私も社会人の一人だったと自覚することになる。私が座りたかった席は大学生と思しき男性に取られてしまった。私よりカジュアルな服で、カジュアルなバッグをかけている。きっとその人から見た私は、疲れた顔の社会人。寝不足で顔の青い自分が、車内ガラス戸に反射してうつっていた。"
  ]
 },
 {
  "id": 5,
  "date": "2026.07.23",
  "title": "視、心、関心",
  "lead": "中野での一人暮らしと、自分のことをほとんど語らない父、そして自転車の記憶について。",
  "body": [
   "　今年の4月の後半、中野で一人暮らしを始めた。きっかけはなんてことはない、社会人になって1年半が過ぎて、お金が貯まったからというありふれた理由だった。あとは通勤が遠かったこともある。いや、これが本当の理由かもしれない。東京の西から新宿方面へ、毎日ドアtoドアで1時間40分。往復3時間越え。座る機会を逃せば1時間立ちっぱなし。これはさすがに遠かった。そして、両親とずっと住んできた生活から、どこか新しさを見出せないことへの退屈さをもうとっくに感じていたのだと思う。",
   "　東京都は、世界的に見ても人口密度の高い小さい都市である。その形は細長く、新宿駅か東京駅を基準に西側と東側と分けられる。私は西側の中でもかなり西側に生まれ育って、都内へのアクセスは不便だった。それもそのはず、父はほぼ最西端の出身で、母親もかなり西側の出身だった。互いの勤務地も西側で、当然私が生まれ育ったのもかなりの西側だった。そのため出身地を尋ねられて返答しても「ん？」という反応をされる。同じ東京都出身の人でもだ。横田基地の近くであることや、青梅方面ということを追加で伝えてからようやく理解されるような場所だ。そんな絶妙に不便な家から、離れてみたかったのだと思う。",
   "　父親は、自分のことをほとんど語らない。幼少期に遊んだ経験が乏しく、社会人になっても都内へ出たことがほとんどないため、あまり語りたくないのだと以前言っていた。幼少期の好み、育った場所、人付き合い、好きな映画、流行っていた音楽、覚えているニュース、何も聞いたことがない。寡黙かと言うと、夜は毎日発泡酒を飲み、酔ってテレビで流れるゴシップについて根拠もなしに雄弁に語る。お酒がないと喋れないタイプの人間だ。今まで一緒に住んできて何か会話を沢山した、という記憶はない。四半世紀一緒にいて、何も記憶がないのもおかしいと思うが、結構事実なのである。身体的な記憶はあった。公営プール、自転車、家の前でのバドミントン、険しい顔でする運転、草むしり、植木……。ただどれも会話をした記憶がぽっかり抜け落ちている。元から父親はかなりの昭和気質で、ステレオタイプな父親像そのものだった。西の方出身ということに起因するかもしれない。スポーツが好きでとは言ってもやっていたのは野球ではなくバレーらしい。50を過ぎてからは、リビングのソファーで発泡酒を飲んで寝落ちする。毎日のように見て嫌気がさしていた。そんな絶妙な家庭状況から、やっぱり逃れたかったのだと思う。",
   "　＊＊＊\n　家具もほとんどなく、軽トラを借りれば足りてしまうような荷物の少なさで、土日の休みを使って引越しをした。新生活が始まるという実感はほとんどなく、なんとも言えない感情で、私は中野まで車で送ってもらった。\n　引越しによって生活が変わることを実感するのは、複合的な条件によるものではないだろうか。就職を機に上京。ライフスタイルの変化によって、帰省。絶妙に通えてしまう遠さをずっと経験してきて、寝床が変わることがなかったから、引越しから少し経ちこの文章を書いている今でも新生活になったと感じたことはなかった。むしろ、家の遠さに嫌気がさしていろんな友人の家に宿泊した時の方が金銭的な余裕も含め、ようやく社会人になってライフスタイルが変化したと感じたのだった。\n　両親が手伝ってくれたこともあり、あまり手がかからなかった引越し。密集した住宅と、コンクリから反射する熱で東京は4月でも本当に暑い。荷物を運んで、少し笑う父。時間がなかったのか、髭も剃っていないようだった。それを見て思わず「うわ、汚い」と反射的に口走りそうになったのだった。それは小学生が遊んで、消しゴムにシャーペンの芯を刺したそれのようだ。その瞬間に思ってしまうあたり、いろんな面で私は父親を軽蔑したかったのだと思う。それでも、父は息子のわがままを聞いてくれるものだ。父親と母親、二人が手伝ってくれたおかげであっけなく引越しは終わった。このあっけなさも、今も生活がそこまで変わったと思えない要因のひとつかもしれない。さっき笑ったときに、父の目にはシワができていた。それは単純な笑いジワではない。一度もう折り目をつけてしまった紙のようなシワだ。そう、気づいたらあと一年足らずで還暦になる二人を、新しい家から見送った。午後4時ごろ。明日会社なんだ、と思って早く寝た。",
   "　＊＊＊",
   "　私は父親を数ヶ月ほど無視していたことがある。大学三年の6月に、電動自転車を買ったことが全ての発端だった。一人で購入すればいいものを、決めきれない自分の性格や、金銭面の不安から両親についてきてもらい、電動自転車の購入を決めた。その際に、劣化しないよう自転車のカバーを雨の日には必ずかけるように自転車屋から伝えられたのだった。\n　当時、私はパチンコ屋でアルバイトをしていて、その日は夕方からの出勤に自転車で向かうつもりだった。梅雨の時期ですでに雨が降っていて、勤務地までは歩いて向かうことにした。その際、自分の自転車にカバーをかけ忘れていたことに気付き、母親にカバーをかけることをお願いしたのだった。予定の直前時間ギリギリに行動する自分の癖はずっと治らない。\n　パチンコ屋でのバイトを終え翌朝起きたら、明らかに父親の機嫌が悪かった。カバーが自転車に被されていなかったこと、そのせいで、風でカバーが飛んでしまったこと、それが向かいの家までいってしまったことを強く責めてきた。時間がギリギリになってしまって、カバーを母親に頼んだことを伝えると、鬼のような剣幕になり、何回も言っただろと。なんで自分でしっかりしないんだと。強く怒鳴りつけ、しまいには手を挙げてきた。\n　父親が手を挙げることを、私は昔からひどく嫌がっていた。誰だってそうだと思うが。東京とはいえ、半世紀以上前から特に西で育ったなら、暴力はきっと子供を従わせる教育手段の一つだったのだと、父の育った家庭環境を恨んだ。もちろん違う家庭もあるけれども。私は、何かとあると暴力について事細かく言及し、自分の過ち以前よりも言葉で解決しないことへ強く反発していた。どんな状況でも、父が手を挙げるまで感情が動いてしまうと話し合いにならず、暴走機関車になり手がつけられない。あらゆる欠点を私に対して突きつけてきて、冷静に会話をすることができない。全力でぶつかると必ず泣いてしまうし、結局父親が勝ったと感じてしまう。もちろん勝ち負けではないし、そもそも今回の喧嘩の発端が些細なことすぎてエネルギーを割くことでもないし、喧嘩をするたびに呆れ、解決を諦めていた。毎回ほとぼりが冷めるまで、よそよそしく接するということをしていた。抵抗することもなくなっていった。\n　しかしそのときだけは、何かこのままではダメかもしれない……と思い、私はひとつの抵抗の形として、とあることを実践した。いや、実践というよりもむしろしないことにそれは近いかもしれない。\n　翌日から、父親と話すことを辞めたのだった。理由は簡単で、話し合いもできないし、暴力を振るってくる人は嫌いと幼少期から散々伝えているから、それを体現するため。また、酒に酔った勢いで暴走してしまう癖もあり、それが家族なら許されると思ってわかってやっていることを感じたから、もうどうにでもなれと思った。朝も挨拶をしないことから始まる。それは、仲の悪いシェアハウス同居人か、はたまた民泊で偶然隣にいたグループにするような応対だ。なんだか気持ちよかった。はじめからこうすればよかったと思った。そもそも父子の会話はとっくに少なくて、わざわざ話すようなこともなかった。だからちょうどいい。ほとぼりが冷めて忘れさせることなんかない。冷静さを取り戻した時に、一番近くにいる息子と会話できない原因を作った自分を自覚させたかった。",
   "　無視を始めたのが6月の終わりだったから、確か8月。高校の美術部の一部メンバーと顧問の先生で飲みに行く予定を立てた。と言っても美術部の中には連絡も取れないメンバーもいて、コロナ禍で会わない風潮もあり結局、コンスタントに連絡が続いているしーちゃんと伶で行くことになったのだった。お店は先生が探し出してくれたが、コロナ禍でお店を探すのがやっとだったそうだ。しーちゃんはまた髪色が変わっていて、いつにも増して元気そうだった。先生は相変わらず結婚したいと言っていて、でも自分は二児の父親のような風貌にしか見えなかった。相変わらず秋田出身という血を感じる白い肌をしていた。伶は、いつも通り人間関係の話をするのだった。\n　飲み会の場所は、八王子駅の近くだった。当時、ほぼ実質的に禁止されていたカラオケ屋をそのまま居酒屋化したような場所で行われた。しかも居酒屋ではなく、中華料理メインでお酒が出るお店だった。当時の状況を考えると致し方ない営業の仕方だったと思う。（別に、居酒屋の営業は禁止ではないが、風潮がそうさせていたと思う）\n　飲み会で話すことの正解はいつもわからない。思い出話、積もる話、昔の話をするとそれこそ武勇伝を語るような、おじさんくさくなってしまう。そういったときにもう高校生ではないのだと年齢を感じてしまい、自分が大人にならなければいけないことを自覚させられる。飲み途中は思っても、時間が経つとその場の雰囲気に飲まれて、結局振り返るような話ばかりしてしまう。その日は気分で、なんとなくタイミングを見計らって今の自分のことも話してみた。\n  「今、父親のこと無視してるんだよね。」\nしーちゃんは「いやー無視はしない方がいいでしょ笑」\nと笑って明るく返してくれた。それまでの前提を話したか、話してないかも覚えていない。無視を始めたことは先生にも伶にも聞こえてたはずだけど、その時の二人の返答は覚えていない。この時、何故か「やっぱりなあ」と思って、ピリッと少しだけ自分の良心が痛んだことを感じていた。でも翌日から無視は辞めないし、新しくする会話もなかった。",
   "　無視をし続けたある日、父親がひどく落ち込んで帰宅してきた。\n　「なんかねパパ、会社で大損失のミスをしてしまったみたいなんだよね。だから落ち込んでるみたい。」　\n　と母親が教えてくれた。普段なら、そういうとき家庭に不満を持ち込み、些細なことで八つ当たりしてくるのだが、今回はどうも様子が違った。無気力で、常に現実から目を背けたい感じが伝わってきた。全て投げやりで、一人になりたそうな様子だった。会話をしていなかったから、自分から聞くことはしなかったが、母親との会話を盗み聞きすると、「俺はもーだめだ。」「損失で言うと何千万……」「報告すればよかった……」と聞こえていた。休みである日曜日に朝から発泡酒を飲み、いつも優しく注意する母も「何やってんだよ」と強めに注意していた。「うんうん、いやーもう何を言っても今頭が……」などと返し、父親は明らかに疲弊していた。\n　そんな日でも、なぜか午後に外食に行くことになり準備をして家族で出かけることになった。相変わらず母親には返答するが、父親には返答しない。父もわかっていて、話しかけてこなくなっていた今日この頃。\n　出掛け間際に、\n　「楓、この前は悪かった。カバーがちゃんとしていないことがどうしても許せなかった。今は、ちょっと会社のことで辛くて……」\n　などと急に謝ってきた。私は至極驚いた。だって、生まれてこの方父親が家族に対して謝っている様子を見たことがなかったからだ。最後に「父と息子の関係に戻りたい」と一言放った。私はこの場で、感じていた今までの全ての不満や彼の暴力性について問いただすことができると思った。けれども、  \n  「ん。はーい。」\n　と可にも不可にもとれる返事をして車に乗り、家族で出かけた。\n　　こうして、一応謝ったからいいかと思って、私は翌日から無視することを辞めた。半年もなかった。4ヶ月くらい。無視を始めるのも簡単だったが、無視を辞めるのも簡単だった。とりあえず挨拶はするし、何かはする。徐々にいつもの日常に戻っていく。じゃあ簡単に許すのかと言うと、自分の中には嫌なことをされたら絶対に許さないというポリシーを持っている。表面だけでなく、心の中まで許してしまったら、何かが崩れてしまう。そして父の大損失のミスは、結局どうなったのか覚えていない。ただ、彼に謝るきっかけを与えたのはそのミスかもしれない。ミスをして良かったんじゃないかね、なんて。",
   "　＊＊＊\n　そういえば、壊れた自転車をいつも直してくれたのは父だった。工具いじりが好きで、ものづくりの精神はここで受け継いでいるのかと思った。でも、その時した会話の記憶はやっぱりもう覚えていない。結局、そこまで良い記憶じゃないのかもしれない。\n　引っ越してから、毎日自転車で会社に通っている。片道20分。 住んでいる中野から落合駅を抜けて大久保へ、そこを抜けると新宿歌舞伎町を横切る。路駐が多すぎて自転車の道はほぼない。危ないなあと思いつつ、新宿の大通りを抜けて、渋谷区に入る。すると、急に人が少なく通りやすい道になる。気づいたら会社に到着している。通勤には、あの時買った電動自転車を使っている。今日も仕事が終わったら自転車で帰り、18時には家に着く。雨の時期が近づいてきて、急に降ることも多くなったと最近は思う。ええ、もちろん、ちゃんと自転車には、凹凸ジッパーのカバーをつけていますよ。"
  ]
 },
 {
  "id": 4,
  "date": "2026.06.28",
  "title": "集団という義務",
  "lead": "集団運動が苦手だった自分と、水泳だけは続けていた10年間について。",
  "body": [
   "　Yから\n　「もし運動神経抜群で何でもできますだったら部活どこはいる？おれ、バレーボール」\n　とLINEグループの通知が来た。",
   "　私は、\n  「野球部かな。ガチのホモソって経験してみたい」と返答した。",
   "　Mは、\n  「一般論として汗くさそう」と言っていた。",
   "　 ＊＊＊",
   "　10歳くらいのとき、親が町内会に入っていた。同じ町内会で、且つ地元の少年野球チームに息子が入っているお母さんに父が「息子さん1回やってみない？体験だからさ」と声をかけられていた。\nその誘いは「ね、そろそろ中学生になるのも近いんだし、部活動に近いことをさせてもいいんじゃない？」といったニュアンスを含んでいた。\n　私はきっと、その場で苦虫を噛み潰したような顔をして、やんわりと断っていた。だが話の流れと親の意向というものには従うことしかできず、半ば強引にそれを承諾させられた。\n　そして翌週土曜日の午前には、家の近くのグラウンドに行っていた。父親の車に乗せられて。\n　グラウンドに入ると、小学校の知っている顔ぶればかりがいた。誰かが言っていた、小学生は足が速いヤツがモテる、と。足が速いというだけでクラスでは注目される。そんな風潮はもちろん通っていた小学校にもあって、足が速いヤツはみんなの脳の片隅に置かれていた。グラウンドにいたのはそんなヤツばかりだったのだ。その時、みんな野球をしているから足が速いのか、と当たり前の反芻が脳内で何回もおこなわれた。",
   "　まず、アップをおこなう。アップは、グラウンドをみんなで1周する程度の軽いものだった。お互い小学生だし、緊張するということもなかった間柄だ。それでも自分は運動ができないというレッテルを既に持っていて、そんな自分がみんなの前で走るということが何故かとてつもなく恥ずかしかった。すごく嫌で、早く帰りたいと思いながらアップに参加した。\n　そんな私を見て監督らしき人が「もう大丈夫だよー」と少し遠くから声をかけてくれた。\n　思い返せばそれは、やる気ないならやらなくていいよーという意味とも取れるし、無理してやらせたくないという心配だったのかもしれない。",
   "　好きこそ物の上手なれという言葉があるが、本当にその通りだと思う。自身の技術を磨くために熱中は必ずと言っていいほど必要だ。上手になるビジョンが思い浮かばない物事には、好きになれないし逆も然り。\n　そもそも、幼少期から集団でおこなう運動に興味が持てなかった。興味が持てないものにはあくびが出て、すぐにボーっと外を眺めてしまう。一方で、年齢が進むにつれて、集団での運動行為は義務教育のカリキュラムに組み込まれていく。\n小学生にとっての義務というのは、当たり前にやるものである。中学校に入ると、体育の時間には無理にやらされていると体が感じてしまい、気づいたら私はどんどん、体育・スポーツ・運動というものに嫌悪を抱く生徒になっていた。",
   "　そのお母さんの誘いを受けた父の気持ちを考えてみたい。息子とキャッチボールなんかをきっとしたかったのだと思う。子供を持ったら、そんな気持ちを抱いて、スポーツを習わせたいと思うことは、ある種の父性本能なのではないだろうか。",
   "　そんな想像した父の思いとは裏腹に、私は、空気を合わせてスポーツをするという典型的な集団行動に馴染めなかった。時間を決められ、動きを決められ、言われた通りにできなければ全員の前で赤っ恥をかくという妄想をしてしまい、体がうごかなかった。反面、学校の授業で、机に座って聞くだけの座学は得意だった。なるべく窓際を好んで、遠くを見つめる。そしてどんどん自分の世界の時間を作っていってしまう。",
   "　差し込む光と、カーテンが受け止められなかった風。学校のカーテンは薄いピンクで、まるでそれを通り抜けたように風も暖かかった。今でも覚えている、遠くに見える山のような何か、コントラストの激しい屋根、魚の骨のようなアンテナたち。",
   "　しかし、そんなスポーツが苦手な私でも水泳だけは高校生になるまで続けていた。水泳は集団に合わせて動くことが少なかったからかもしれない。水泳クラブに通い始めたのは、4歳のときで、今から数えてもう20年も前の話になる。どうして通い始めたのか、なんで通いたくなったのかわからないけれど、地元の水泳クラブに通っていた。5歳のタイミングで隣の市に引っ越した時、駅近くのスイミングセンターに通うことになった。",
   "　少年野球チームのときと同様そういった場に知り合いは居て、世間は狭いものだ。同じ学年の知り合いがそこには数人いた。小学校から少し離れた学童と併設する公園に、スイミングセンターへ向かう無料バス停があり、そこで彼らと会っていた。それは毎週金曜日の夕方だった。通うのは嫌だったが、バスの来る時間まで公園で遊び、20分ほどのバスの乗車時間でも私たちは後ろの席で遊んでいた。",
   "　学年が高くなるにつれ、一人、また一人と減って行った。中学生が近づくにつれ、習い事をしていた子は学習塾に入り、スポーツをやっていた子は学校での部活動に専念するよう準備する。しかし、私の親は1度決めたことは続けなさいというタイプだったから、一旦水泳を始めた私はなかなか辞められなかった。6年生まで残っていた2人の友人も中学校に上がるタイミングで結局あっさりと辞めてしまった。とは言っても一人で通うわけではなかった。",
   "　そのバスに乗るのは何も同級生だけじゃない。この周りに小学校は一つだけで、おそらく通学区域でその付近をバス停にしていたのだと思う。学年が少し離れた下の兄弟と仲良くなっていた。私は小学校を卒業後、校内の図書館の返し忘れていた本を彼らにこっそり返しておいてほしいと託したこともあった。友達がいなくなると寂しいと思っていたが、小学校を卒業してからの3年間、さらに高校に入学するまでの間も続けていて、スポーツの苦手意識がありつつも、寂しくならず10年ほど続けてしまった。",
   "　当時はやめたかったけど、高校に入学して部活を続ける場合、水泳部なら入部してもいいと思った。苦手だけど人よりは少しできるでしょ、と自信になっていたのだと思う。結局のところ、少しでも勝手を知っていて一人で行動できるなら、スポーツでも好きになるのかもしれない。",
   "　10年以上通ったこともあり、コーチが見ていないタイミングがわかってきていた。見計らって、水を下から見てみたいという欲望のもと、私は勝手に潜っていた。いや、まるで溺れたように仰向けになって沈む。そうすると、さっきまで聞こえていたあらゆる音が遠く彼方へと消えてゆく。\nコーチの声、笛の音、窓外から応援する大人の声、子供達の会話、外の車の音、線路沿いの電車の音、落としたビート板がどこまでも反射して響く音。コーーン、カコーーン と常にどこかで鳴っている。\n　大きく西陽が入るその建物は、水と人を照らす。\n水の泡なのか、波なのかよくわからない不定形な水を涼みながら数秒間みていた。どろっと、奥底に体が沈む。キラキラと光が差し込んでいるのを感じた。たくさんの人がいても、音はどんどん聞こえなくなっていく。",
   "　その瞬間、ゴボゴボと生暖かい水が耳に入る。プールから出て水抜きをすると、まるで脳から汁が溢れたように、ジュワッと、耳から水が出る。ボオーーーと脳の内側から変な音がしていて、窓の外を見るとあたりは暗くなっている。もう帰りの時間なんだと気づく。",
   "　帰りのバスではガラケーのワンセグでニュースを流して見ていた。毎週金曜日の出来事だった。",
   "　　＊＊＊",
   "　Yは、\n  「そこそこ真面目な印象のある部活がいいのと、室内スポーツならユニフォーム汚れなくて洗濯ラクだなって」\nという理由でバレーボールを選んだらしい。",
   "　Mは、\n  「トライアスロンで、部活なら陸上部がいい」\nと言っていた。似合いそうだ。",
   "　別の会話の往復をする。",
   "　Yは、\n  「半ば強制ではございましたが皆さん答えてくれてありがとう」\nと言っていた。",
   "　私は、\n『俺らどこへ向かうんだろうな…』\nという不思議なスタンプを送り、会話を終わらせてしまった。"
  ]
 },
 {
  "id": 3,
  "date": "2026.06.03",
  "title": "会社の人事部はnoteとか見るのか？",
  "lead": "人との距離感、いじりと敬語、地下アイドル、そして「死ねばいい」という歌詞について。",
  "body": [
   "　告白をします。\n　告白をします。",
   "　人との関わり方をどうすれば良いのでしょうか。俺にはわからないんです。たとえば、採用・人事・広報とかやっている人ってすごいですよね。俺も入った会社の人事担当の人の経歴がすごくて、理系の院卒なのにMBA取るために海外行った人で。その人が一次面接の面接官だったんですけど、その人、古口さん。面接受けた時にさ普段より少し固い対話をしているなっていう印象だった。それで一次面接通過になったの。なんか舞いあがっちゃったよ。さらにさらに進んでいくと、なんか気づいたら内定もらってた。自分のこと話しただけなのに内定貰っちゃった気分。まあ色々準備してたけどさ。思い返せばすごくいい人だった。というか真面目だった。でも真面目に生きてきて、要領のいい人を真似してきたんだろうなってタイプだった。",
   "　うちの会社ってさベンチャー気質の会社にいたから、突発的に新規事業や、新商品を開発することも多くて。ね、年度末に辞めたけど。まーなんでだろうね。真面目にやってる人には合わないのかね。うちの会社。だってさ、その人大手からわざわざ転職したセカンドキャリアなのに丸３年働いてやめちゃったんだよ。人事のトップだったのに。辞めた理由、給料かね。そういや子供産まれてたし。まあいっか。真面目でいい人でハンサムだけど、時々結構毒舌でさ。意外と「ああいうのは良くないよね」とか「なんでそういうこと言うかねぇー」とかボソッと言うの。キャラなのかな。そこがギャップで人間ぽさを感じてた。",
   "　で、だいぶ話がずれちゃったので、元に戻しますと、俺って人と関わるときに真面目に接するか、いじるかのどちらかしかできなくって。まあサイテーだよな。そこでさ可愛い後輩がいてさ、なんか大型犬みたいなんだけど。そいつさ、ちいかわが嫌いらしくて。俺があえて「ちいかわ」っていうとわざわざ変顔してくれるの。だから面白くて何回も言っちゃう。ベロを突き出して嫌な顔をするんだよな、彼。でもさ、怒っている自分を演じてるだけなんだと思う。",
   "　人をよくいじる人間がいる。ふと、その人がいじらない人は果たしてどんな人？と思ったことがある。勝手に基準をもうけてる。そういう人でもいじらない人はいるんだよね。僕もなんだけどさ。とかそれ俺なんだけどさ。心に聞いてみる、その基準ってなんだろうか。結局わからないの。強いて言うなら心の中で見下してるのかな。",
   "　反対に真面目に接することしかできない人もいる。常に一定姿勢。友達にも距離を置いている、先輩や上司にも一歩引いてる。偉いな、区別をしないんだなって思った。人に対しての区別や差別はダメだよね。世の中、そういう風潮。そんな人を見て、人をいじっている自分、死ねばいいね。そんなことを２０歳の時から考えてた。でも死なない。死なないよ？どうせ。口だけ。あと、言霊ってあるよね、なら尚更、口にしちゃダメじゃんね、馬鹿。",
   "　死ねばいいやで思い出したんだけど、6年ほど前にある地下アイドルを推していたんだよね。そのアイドルを推したきっかけは、アイドル好きの友人が現場を誘ってくれたことだったんだよな。でさ、どういうアイドルかっていうと、人と関わりをうまく持てない『壁』を持つ少女……生きにくい今を生きる子供たちの心の叫びを歌にする 。そういうコンセプト。アイドルなのに歌詞が暗くて、でも曲はパンク？ハードコアみたいな。かっこいい。",
   "　たとえば、うーん。日本国内で一番有名なアイドルって誰だろう？松田聖子かな？アイドルグループではなく、アイドル単体で、老若男女問わず誰でもって言うと誰だろうね。アイドルって芸名だけど、本名もバレてるじゃん？というか芸能人か。次に日本国内だとAKBとかかな？あれも芸能人か。俺が推してたそのアイドルはインディーズバンドのアイドル版だと思ってくれていい。そういったように本名を公表せず、芸能人ではなく本名もバレてない場合って大体偽名、ニックネーム、ペンネーム、あだ名。呼び方はなんでも良いけれど、ともかくそういう感じ。",
   "　それまで所属していたアイドルが解散して、別のペンネームで新しいアイドルグループに久しぶりに所属とか、よくある話。地下アイドルでそういう場面を何回も見てきた。みんなのこどもちゃんには二人のメンバーがいて、一人はほのか。もう一人はしなもん。ほのかは転生ではないけど、別のアイドルグループに所属していて、解散してそのあとまた別のアイドルになったの。",
   "　みんなのこどもちゃんのほのかは俺が推し始めてから半年で体調不良を理由に脱退した。活動期間でいうと３年くらいだと思う。数年経ったある日ふと、SNSを見ていたら、脱退後にアイドルは再開せず、一般の人として生活していた。もちろんそれは公開するために作っているんだけど。彼女が元アイドルということは知っているというファンとたまに会えるイベントに参加して。それだけ。つまりちょっとだけ活動してた。でもそのアカウントももう消えちゃった。アイドルって、そう。儚いんだよね。偶像、雲の上、崇拝。幻なんだよね。みんなのこどもちゃんは、暗めの歌詞が多くて、悩みを持つ人の代弁者だなって思った。ステージの上に立って、叫ぶように歌いながら、苦しみを叫んでる。",
   "　これさ気づいたら喋っちゃうんだけど俺ね、会社員になってから、幾つもの理不尽を受けたんすよ。そんなの、最初からわかっていたけどね。",
   "　それでね、社会に平等なんかないと思った。友達という関係以外は平等なんかないんだと思う。いや、友達でも不平等かとか全然ある。法の下の平等とか、きっと便宜上の言葉なんだよね。だって性別や年齢で区別する方が楽だから。人間が決めたのに、またやっぱり差別なしでとかむりじゃん。現に互いを尊重するために使われる敬語が、社内だと下から上は絶対だけど、上から下ってさ確実じゃないじゃん？俺の嫌いな先輩はわざわざ丁寧だと思ったのか俺に頼み事をする時「よろしくお願いします」を「よろしく！」に変えてた。上に立たないと気が済まないのかな。Googleチャットは編集済みってわかるし、スマホの通知履歴でわかんだよ。まあそんなわけで、敬語を使うことで上下関係ってむしろ強調させられるんだよね。タメ口を先輩が使うことでより強調させられるんだよね。まあそういうさ権威主義を受けて、思ったんだ。ヒエラルキーは生んだほうがいい。世の中では白黒はっきり区別をさせた方がいいんだと思った。そしたら、新卒でも頑張ったら給料あげるとかいうめんどくさい評価基準を作らなくていい。あらゆる性別に名前なんか付けてる時点でつまりそれは区別なんだよね。人事の古口さん、頑張ったら給料上げるための評価制度を設けさせられることに疲れちゃったんだよ、きっと。数字で勝負できる会社はいいと思うよ？でもさーうちはそうじゃなかったんだよね。しかもそれを少ない人数でやっててさー大変だったよね。",
   "　なんか俺はさ普段、差別とかよくないねって普段言ってるの。会社の中での権威主義とかすごく嫌なのね。でも人をいじってしまうんだよね。どうすればいい？どうやって人と関わればいい？何がいじるの基準？でもたまにちょっかいかけるのくらい良くない？でも先輩にはできない。だって上には逆らえないから。あ、会社で人をいじって接することなんかなかったわ。つかさずっと敬語だわ。一日中敬語。まあつまりそれに飲み込まれてるんだ。そのくせに挙げ句の果てに最後に社会に平等なんかないと言い出しました。ヒエラルキーは生んだほうがいい、とか。笑うしかない。おお死にたい。そう、軽々しく言いたくないけど、死にたくなったの。身投げしたくなったことがあった。みんなのこどもちゃんには「死ねばいい」って言う歌があるの。だから最後に見てほしい。",
   "　でも歌詞とか載せたらJA◯RACがうるさいから、こんな歌詞だった気がするっていう記憶で思い出したものを見て。\n（著作権の都合上、表記できません）",
   "ちなみに古口さんは流石に仮名ね。\nほのかのアカウント、もう消えてた。\nおしまい。"
  ]
 },
 {
  "id": 2,
  "date": "2026.03.30",
  "title": "三月になると思い出すこと",
  "lead": "10年前の高校入学から、卒業式で泣きじゃくった担任、そして悲観の色について。",
  "body": [
   "  「ありがとうございます。ありがとうございます。」\n  自分の高校生活最後の日。つまりは卒業式。真っ赤に目を腫らしている担任が発した言葉をいまだに覚えている。\n  「──────」\n　もうあまりにも泣きまくっていたから、言葉としては聞き取れなかったけれど、体に留めておけないような数々の感情が涙として溢れてしまうんだろうと彼を見て思った。",
   "　＊＊＊",
   "　10年前の2016年、私は高校生になった。はじめての電車通学と、義務教育から外れるということが自分にとって大きな変化だった。年齢を考えると当たり前なのだが、自宅から数キロ離れた場所に毎日通うという経験こそが新鮮だった。インドアな自分はアクティブに外に出ることはしなかったし、水泳こそ習っていたものの運動部ではなかったから、遠征などの経験も乏しかった。毎日どこかに出かける感覚の新鮮さを噛み締めて八王子まで通学していた。\n　そこで、私は担任と出会うことになる。彼は生徒の受け持ちをするのが初めての若い先生だった。齢27歳になったばかりなのだそうだ。新入生向けのオリエンテーションが矢継ぎ早におこなわれる4月。保護者向けの説明会も少しあるようで、母も私も忙しい月だった。何もかもが真新しい4月某日、私の学級のPTA会で、保護者の親睦を深めるイベントがおこなわれたと母が後日言っていた。もちろん主催は担任である。それは全員が無言で年度の誕生日順に並ぶというものだった。指を使って互いの誕生月と誕生日を表してどんどん並んでいく。母は必ず先頭に行くことがわかっていたそうなのだった。一番誕生日が早い。なぜなら「4/1」だからだ。（ちなみに正確には4/1が年度の最後で、4/2の誕生日の人が最初になるらしい…）\nそうこうしているうちに、全員が並び終え、一人一人声を出して自分の誕生日を明かしていく。つまり答え合わせをその場でおこなう。最後の保護者が発言したあと、担任はこう言った\n  「3/31、これで終わりです。」\n  面白い親睦会になったと母が言っていた。先生と誕生日が一日違いなんだね、とも。この話を聞いた時、担任の誕生日が3/31と年度の最後であることを認識したのだった。同時にそれは、必ず配られる学年だよりのプリントで、先生方の紹介に、私が全く興味を持っていなかったことも物語っていた。ちなみに私は誕生日が2月の後半とかなり遅く、その前後の早生まれの人には勝手に親近感が湧いていた。",
   "　＊＊＊",
   "　先日、同じ高校の美術部だった鈴木さんから話がしたいと連絡があった。彼女は東京の大学を卒業後、関西の方にいてすぐには会えないから電話をしようということになった。同じ美術部だった中で連絡を取っている人はもうほとんどいないから、わざわざ連絡をもらえたことがすごく新鮮だった。そもそも高校を卒業して1年も経たないうちにコロナになったため、コンスタントに連絡を取っていない人たちとの距離はさらに広がり、終息後にあえて連絡を取ろうにも距離が広がりすぎて難しい（と私だったら思う）。実に5年ぶりに時間をとって話せることは本当にありがたいことだった。\n　話したのは本当になんでもないことだった。コロナ禍以降のお互いの生活はほとんど知らないし、過ごした時間で変わったであろう考え方、趣味、話し方、目線がそこにはあった。気づいたら3時間ほど話していた。私は長電話しすぎて声が枯れていた。鈴木さんとは三年間同じ教室を共にしていた。担任も変わらなかった。だから担任の話題にもなる。その時に秋田出身の彼が地元にUターンをして、現在は地元で結婚していることをその場で知った。きっと地元で教鞭をとっているのだろう。",
   "　＊＊＊",
   "　悲しい時の気持ちを青で表現する人は多い。涙の色は水色で、物語の主人公に悲しい出来事があった日は、たいてい雨で、外は鬱蒼としている。人々のイメージの中で青は清涼、冷静、落ち着き、そして大まかにSadな感情が青のイメージで人々の脳に染み付いている。私は悲観を色で表すなら、白と赤だと思っている。物理的なイメージと結びつけてしまうのが私の悪い癖だが、涙は本来透明だ。しかし血のヘモグロビンがなくなって、透明になっているとどこかで聞いたことがある。\n　涙の本来の色は赤。鮮血そのものなのだ。そんな涙が、人の頬をつたい、垂れて落ちる頃には、顔の表面の皮脂やチリ、ほこりと混ざって少しだけ純度が薄れる。純粋だと思われた透明の涙は、少し白い。また、人は冷静に泣くことがあるのだろうか。感情の沸点がある一定に達すると表面張力で保っていた涙が一粒、また一粒とこぼれ、それが押し寄せてどっと涙が溢れていく。怒りも同様で、ある地点を越えたら抑えきれなくなってしまう。\n　興奮状態の人の顔は少なくとも青ではない。目の血管は浮き出て、顔は紅潮し皮膚の薄い鼻まわり目周りは赤く、火照る。",
   "　あの卒業式の日、全体の卒業式が終わった後、最後のホームルームを教室で行う。そこで、クラスで一人一人担任への感謝を出席番号順に生徒が読み上げるサプライズをおこなった。1番の飯田さんが読み上げ終わる時点で既に声が震える彼を見た。それは大人の男性が号泣する様子をリアルにはじめて見た瞬間だった。\n  「ありがとうございます。ありがとうございます。」\n 一人一人の発言にさらに感謝を述べる担任。既に彼はもう何を言っても涙を流す状態になっていた。それを見て、強がっていた私は涙なんか流さないと思っていた。しかし、3年前に受験をして、同じ場所に通うことになった学友たちと担任（とその保護者たち）が2度と同じことになることはないということ。受験に追い詰められて、目の前のことで必死だったけれども、この学校に通うことがもう終わりということ。外は桜が少し咲いて、陽が毎日少しずつ伸びていた。もう一度彼の顔を見たら、泣かない自分が不誠実みたいな気がした。自分の視界がうっすらくぐもったのを感じて、すぐに目をこすり視線をそらした。ガラスの向こうは花の香りが今にもしそうな春の空だった。",
   "あれから7年、彼と出会ってからは丸10年が経った。",
   "今年も3/31までもう少し。そして、もう次の年度が迫っていた。"
  ]
 },
 {
  "id": 1,
  "date": "2026.02.13",
  "title": "一人になる",
  "lead": "一人暮らしを決めた日と、『プラダを着た悪魔』と『女王の教室』のラストシーンの符号。",
  "body": [
   "　2月3日\n　一人暮らしを決めた。前日に内見の予約をして、新宿駅から歩いて 3分位のところにある不動産屋に行った。おおまかな場所はもう決めていた。会社まで自転車で行けて、そんなに高くなくって、新宿よりは西側がいいと思っていた。",
   "　予約をしていた不動産屋に着いて、条件に合う部屋を探し続けて、気づいたら3時間経っていた。\n　私はその中で自分が想定していたよりも少し高い価格の 1つの部屋を決めた。確定ではない。入居時期が 4月下旬と少し遅いことがネックだった。見積もりだけもらって不動産屋を後にした。",
   "　なんかすぐに帰る気にならなかったので、新宿の京王線口にあるドトールに向かった。いや、他のどこでも良いのだが、ルノアールや、星乃珈琲店は長居をする客が多いようでかなり混んでいた。そんなに長く喫茶店にいるつもりもないから、駅の改札のすぐ近くで空いているカフェに入ったのだった。",
   "　ドトールではコーヒーを飲むことにした。コーヒーは苦手だが、社会人になって時々飲んでしまう。あんな苦くてよくわからない味を、どうして知った気になれるのかと未成年のときに思っていたが、成年を迎えてなお理解ができなかった。カフェインの覚醒効果を求めて仕方なく飲むのだが、これがきっと大人になることなのかなぁと思った。",
   "　20時ごろドトールを出て、何も考えずいつも通り帰りの電車に乗った。休日運転の中央線はターミナル駅で運転間隔の調整のためよく止まる。やはり電車に乗る時間は 1時間ほどかかり、家までやっぱりすごく遠いなと思った。だから一人暮らしするのか、と改めて。",
   "　地元の最寄りの駅に着いて、いつも通り自転車を漕ぐ。その日は朝から雪が降っていて昼ごろにピーク、夕方にはすでに止んでいた。\n　私が最寄りに着いた時はもう夜で、ピークは過ぎていた。いつも通りの帰り道を自転車で15分ぐらいこいている。",
   "　やんだはずの雪がパラパラとまた降り始めた。この景色は、きっと映画『国宝』で主人公が手に入れたかった景色のシチュエーション。年が明ける前に見た記憶。改装工事された小さいテニスコートのある公園を抜ける。フッと梅の香りがした。\n　この感覚は、大学入学直前のそれだった。一人暮らしをすること。それは不安と高揚感が一緒くたに訪れてぐるぐると妄想をしてしまうことだ。1人で家を決めること、自分の生活を自分の手で作れること、そのことにすごく期待を寄せていたのが自分でもわかった。入学前もきっとそう。どうなるかわからない不安は、何にでもなれる期待を込めている。",
   "　家に帰って夕飯を食べ、気が向いたので YouTubeのショートを少し流し見していた。これは時間を食う悪魔だなーと思いスワイプを続けると『プラダを着た悪魔』の切り抜き動画が流れてきた。現在 Amazonプライムに入っているので、もしかしたら見れるかもと思ったら、なんとちょうど公開されていた。あまりにも目が離せないコンテンツで、気づいたら見終わっていた。",
   "　『プラダを着た悪魔』は、 10代から20代の女性が「人生でナンバーワンに入るぐらい好きな映画です」とどっかのプロフィールで言っているような……そんな印象の映画だった。（失礼）。",
   "でも、思った以上に面白かった。そしてあっさり終わってしまう。そのとき並行して『14才の母』というドラマを見ているのだが、主人公の志田未来は前作の『女王の教室』で圧倒的な演技力で主演の子役を演じていて、世間に広く知られている。そのラストシーンは印象的で、志田未来演じる神田和美と天海祐希演じる阿久津真矢は、最後に挨拶を交わす。「先生、アロハ！」（アロハは作中でのキーワード）と言い、真矢を残して土手を駆け上がる。そしてはじめて、阿久津真矢は作中では全く見せなかった微笑みを（見えないのはわかって）駆ける和美に送る。",
   "　プラダを着た悪魔のラストシーンでは、街中を歩くアンディと車に乗るミランダがお互いを認識するものの、笑顔にはならない。あえてミランダは知らんふりをする。互いの顔が見えなくなったとき、車に乗るミランダはニヤリと少し微笑む。",
   "　両作に共通するのは、年上側が最後に笑顔になるシーンがあるということ。『プラダを着た悪魔』も『女王の教室』も年上が微笑むシーンがほとんどない。ひとり立ちをさせたときにようやく年上側の物語も完成するのだろう。"
  ]
 }
];
