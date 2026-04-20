import latex from 'node-latex';
import { writeFileSync, readFileSync, createWriteStream } from 'fs';
import { resolve } from 'path';

const projectRoot = resolve('./');
const resumePath = resolve(projectRoot, 'resume.tex');
const outputPath = resolve(projectRoot, 'public', 'resume.pdf');

try {
  const latexContent = readFileSync(resumePath, 'utf-8');
  
  const pdf = latex(latexContent);
  const writeStream = createWriteStream(outputPath);
  
  pdf.pipe(writeStream);
  
  pdf.on('error', (error) => {
    console.error('❌ Error compiling resume:');
    console.error(error.message);
    process.exit(1);
  });
  
  writeStream.on('finish', () => {
    console.log('✅ Resume compiled successfully!');
    console.log(`📄 PDF saved to: ${outputPath}`);
  });
  
  writeStream.on('error', (error) => {
    console.error('❌ Error writing PDF:');
    console.error(error.message);
    process.exit(1);
  });
} catch (error) {
  console.error('❌ Error reading resume:');
  console.error(error.message);
  process.exit(1);
}
