const example1 = `class Example {
    processarOperacao(transacao: TransactionManager, log: LogManager, seguranca: SecurityManager, dao: OperacaoDAO, operacao: Operacao) {
        try {
            //segurança
            if (seguranca.usuarioEstaLogado()) {
                log.info("Falha de segurança"); //log
                throw new Error('Acesso negado');
            }

            //transação
            transacao.begin();
            processamentoComplexoOperacao(operacao);
            dao.salvarOperacao(operacao);
            transacao.commit();
            log.info("Sucesso"); //log

        } catch (e) {
            //tratamento excepcional
            log.error("Falha", e); //log
            transacao.rollback(); 
        }
    }
}`;

const example2 = `class Example {
    @Inject OperacaoDao // dependências
    @UsuarioDeveEstarLogado // segurança
    @Transactional // transação
    @Logger
    processarOperacao(operacao: Operacao) {
        processamentoComplexoOperacao(operacao);
        dao.salvarOperacao(operacao);
    }
}`;

export {
    example1,
    example2
}