import resume from '../personal-info/resume.json';
import ejs from 'ejs';

console.log(resume.name);
console.log(resume.address);
console.log(ejs.render('<%= `${resume.name} ${resume.name_kana}` %>', { resume: resume }));
