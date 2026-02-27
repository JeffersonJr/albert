import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to console and/or error reporting service
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        
        // Log additional details
        console.log('Error Details:', {
            error: error.toString(),
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            errorBoundary: errorInfo.errorBoundary,
            errorInfo: errorInfo
        });

        // You can also send the error to an error reporting service here
        // this.logErrorToService(error, errorInfo);

        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    logErrorToService = (error, errorInfo) => {
        // Example: Send error to monitoring service
        // fetch('/api/log-error', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         error: error.toString(),
        //         stack: error.stack,
        //         componentStack: errorInfo.componentStack,
        //         userAgent: navigator.userAgent,
        //         url: window.location.href,
        //         timestamp: new Date().toISOString()
        //     })
        // });
    };

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center p-8">
                        <div className="mb-4">
                            <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 2.502-3.71V19a2 2 0 01-2 2H6a2 2 0 01-2-2V7.5c0-1.93 1.216-3.71 2.502-3.71M12 15a3 3 0 100-6 0v-1m6 0h.01" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Ops! Algo deu errado.
                        </h1>
                        <p className="text-gray-600 mb-6 max-w-md">
                            Ocorreu um erro inesperado. Por favor, recarregue a página e tente novamente.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                            >
                                Recarregar Página
                            </button>
                            <button
                                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors ml-4"
                            >
                                Tentar Novamente
                            </button>
                        </div>
                        
                        {process.env.NODE_ENV === 'development' && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                                    Detalhes do Erro (Desenvolvimento)
                                </summary>
                                <div className="mt-4 p-4 bg-gray-100 rounded text-xs text-gray-700">
                                    <div className="mb-2">
                                        <strong>Erro:</strong>
                                        <pre className="mt-1 whitespace-pre-wrap break-words">
                                            {this.state.error && this.state.error.toString()}
                                        </pre>
                                    </div>
                                    {this.state.errorInfo && (
                                        <div>
                                            <strong>Component Stack:</strong>
                                            <pre className="mt-1 whitespace-pre-wrap break-words">
                                                {this.state.errorInfo.componentStack}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
