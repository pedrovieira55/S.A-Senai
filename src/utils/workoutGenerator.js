const gerarTreino = (objetivo, nivel) => {
    if (objetivo === 'emagrecer') {
        return "Treino de Cardio: 20 min de polichinelos e corrida estacionária.";
    } else if (objetivo === 'ganhar_massa') {
        return "Treino de Força: Flexões de braço e agachamentos (3 séries de 12).";
    } else {
        return "Treino de Mobilidade: Alongamentos completos e prancha abdominal.";
    }
};

module.exports = gerarTreino;