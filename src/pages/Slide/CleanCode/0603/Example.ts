const example1 = `class OperationProcessor {
    processarOperacao(
        transacao: TransactionManager, 
        log: LogManager, 
        seguranca: SecurityManager, 
        dao: OperacaoDAO, 
        operacao: Operacao
    ) {
        // segurança
        if (seguranca.usuarioDesconhecido()) {
            throw new Error('Acesso negado');
        }
        transacao.begin(); // transação
        this.processamentoComplexoOperacao(operacao); // domínio
        dao.salvarOperacao(operacao); // domínio
        transacao.complete(); // transação
        log.info("Sucesso"); // log
    }
    ...
}`;

const example2 = `class OperationProcessor {
    @Security
    @Log
    @Transaction
    processarOperacao(dao: OperacaoDAO, operacao: Operacao) {
        this.processamentoComplexoOperacao(operacao);
        dao.salvarOperacao(operacao);
    }
    ...
}`;

export {
    example1,
    example2
}