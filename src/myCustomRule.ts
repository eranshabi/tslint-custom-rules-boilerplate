import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Use of debugger statements is forbidden.';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    }
}

class Walk extends Lint.RuleWalker {
    protected visitDebuggerStatement(node: ts.DebuggerStatement) {
        this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), Rule.FAILURE_STRING, this.fix(node));
        super.visitDebuggerStatement(node);
    }

    private fix(node: ts.DebuggerStatement): Lint.Fix {
        return new Lint.Replacement(node.pos, node.end, '')
    }
}

