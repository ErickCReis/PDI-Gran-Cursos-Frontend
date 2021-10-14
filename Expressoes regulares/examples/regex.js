console.log('---- Encontrar todos os resultados ----');
var target = '11a22b33c';
// var exp = new RegExp('(\\d\\d)(\\w)', 'g');
var exp = /(\d\d)(\w)/g;
var resultado = null;
console.log(`EXP: ${exp}\nTARGET: ${target}\nRESULT: `);
while ((resultado = exp.exec(target))) {
  console.log(resultado, exp.lastIndex);
}

console.log('\n---- Verificar se existe ----');
console.log(`EXP: ${exp}\nTARGET: ${target}\nRESULT: ${exp.test(target)}`);

console.log('\n---- Uso com replace ----');
var anoMesDia = '2007-12-31';
var exp = /-/g;
console.log(`EXP: ${exp}\nTARGET: ${anoMesDia}\nRESULT: ${anoMesDia.replace(exp, '/')}`);

console.log('\n---- Uso com split ----');
var arquivo = '100,200-150,200;20';
var exp = /[,;-]/;
console.log(`EXP: ${exp}\nTARGET: ${arquivo}\nRESULT: ${arquivo.split(exp)}`);

console.log('\n---- Encontrar apenas resultados ----');
var codigos = 'A121B12112C12212F12G01';
var exp = /[A-Za-z]\d+/g;
console.log(`EXP: ${exp}\nTARGET: ${codigos}\nRESULT: ${codigos.match(exp)}`);
