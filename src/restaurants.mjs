// User-supplied screenshots and restaurant names. No independent location verification.
const rows=[
 ['돈부리','일식','메뉴 확인 필요 · 분류 임시','🍱',undefined,undefined,'사용자 지정 목록'],
 ['우만돼','한식','메뉴 확인 필요 · 분류 임시','🥩',undefined,undefined,'사용자 지정 목록'],
 ['조마담칼국수','한식','메뉴 확인 필요 · 분류 임시','🍜',undefined,undefined,'사용자 지정 목록'],
 ['담소','한식','메뉴 확인 필요 · 분류 임시','🍚',undefined,undefined,'사용자 지정 목록'],
 ['유가네맑은한우곰탕','한식','메뉴 확인 필요 · 분류 임시','🍲',undefined,undefined,'사용자 지정 목록'],
 ['텐진라멘','일식','메뉴 확인 필요 · 분류 임시','🍜',undefined,undefined,'사용자 지정 목록'],
 ['우리네육향','한식','차돌된장찌개 · 두루치기 · 육회비빔밥','🥩','가산디지털1로 131','자료 표기 180m'],
 ['대두네순두부','한식','순두부찌개 · 제육볶음','🥘','자료 표기: 가산동 371-17 BYC하이시티 1층 122호','자료 표기 160m'],
 ['배부장찌개 가산BYC하이시티점','한식','김치찌개 · 동태탕 · 닭볶음탕','🍲','가산디지털1로 131','자료 표기 160m'],
 ['박가부대 가산BYC하이시티점','한식','부대찌개 · 닭갈비','🥘','가산디지털1로 131','자료 표기 160m'],
 ['쌍룡','중식','상세 메뉴 자료 없음 · 분류 미검증','🥡'],
 ['동남집','한식','곰탕 · 갈비탕 · 매운갈비찜','🍲'],
 ['가산물갈비&즉석소불고기','한식','물갈비 · 즉석 소불고기','🥘'],
 ['명동곰국시봉평막국수','한식','국시 · 막국수 · 제육볶음','🍜'],
 ['골목식당','한식','청국장 · 돌솥비빔밥','🍚'],
 ['오늘돈카츠','일식','안심 · 등심 돈카츠','🍱','가산디지털1로 171 SK V1센터 103호','자료 표기 450m'],
 ['지미존스 가산디지털단지점','양식','샌드위치','🥪','가산디지털1로 136 3차 SK V1센터 1층','자료 표기 91m'],
];
export const restaurants=rows.map(([name,category,menu,emoji,address,reportedDistance,source='사용자 제공 화면'],i)=>({id:`provided-${i}`,name,category,menu,emoji,address,reportedDistance,source,locationVerified:false}));
export const excluded=[
 {name:'온센 금천구 가산점',reason:'자료에 가산디지털1로 205-27 · 750m로 표시되어 최대 반경 700m 조건과 불일치'},
 {name:'SK구내식당',reason:'자료에 뷔페식 구내식당으로 설명되어 뷔페 제외 조건 적용'},
 {name:'홍중샤브샤브',reason:'자료에 2.0km로 표시되어 반경 700m 조건과 불일치'},
 {name:'지존짬뽕',reason:'자료에 미국 California, Los Angeles 주소로 표시'},
 {name:'라멘베라보',reason:'자료에 종로구 · 14.4km로 표시되어 지역 조건과 불일치'},
];
