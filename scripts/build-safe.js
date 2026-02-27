#!/usr/bin/env node

// Safe Build Script - Tenta com terser, fallback para esbuild
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando build seguro...');

// Função para executar comando com tratamento de erro
function runCommand(command, description) {
    try {
        console.log(`📦 ${description}...`);
        const result = execSync(command, {
            stdio: 'inherit',
            encoding: 'utf8'
        });
        console.log(`✅ ${description} concluído com sucesso!`);
        return true;
    } catch (error) {
        console.error(`❌ ${description} falhou:`, error.message);
        return false;
    }
}

// Função para verificar se terser está instalado
function checkTerser() {
    try {
        require.resolve('terser');
        return true;
    } catch (error) {
        return false;
    }
}

// Função principal de build
async function build() {
    const hasTerser = checkTerser();

    console.log(`🔍 Terser disponível: ${hasTerser ? 'Sim' : 'Não'}`);

    // Tentar build com terser se disponível
    if (hasTerser) {
        console.log('🎯 Tentando build com Terser (máxima otimização)...');
        const success = runCommand('npm run build:terser', 'Build com Terser');

        if (success) {
            console.log('🎉 Build com Terser concluído com sucesso!');
            return;
        }
    }

    // Fallback para esbuild
    console.log('🔄 Usando fallback com ESBuild (build rápido)...');
    const success = runCommand('npm run build:esbuild', 'Build com ESBuild');

    if (success) {
        console.log('🎉 Build com ESBuild concluído com sucesso!');

        // Verificar se o build foi gerado
        const distPath = path.join(process.cwd(), 'dist');
        if (fs.existsSync(distPath)) {
            const files = fs.readdirSync(distPath);
            console.log(`📁 Build gerado com ${files.length} arquivos em /dist`);
        }

        return;
    }

    // Se ambos falharem, tentar build básico
    console.log('⚠️ Tentando build básico...');
    const basicSuccess = runCommand('vite build', 'Build básico');

    if (basicSuccess) {
        console.log('🎉 Build básico concluído!');
    } else {
        console.error('💥 Todos os métodos de build falharam!');
        process.exit(1);
    }
}

// Executar build
build().catch(error => {
    console.error('💥 Erro no processo de build:', error);
    process.exit(1);
});
