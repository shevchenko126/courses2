

def middleware_print(get_response):
    
    def middlewaredd(request):
        print("Middleware")
        print(request.__dict__)
        # response = get_response(request)
        return get_response(request)
    return middlewaredd


class MiddlewarePrint:
    def __init__(self, get_response):
        self.get_response = get_response
        print("Middleware")
        print(self.get_response.__dict__)
    
    def __call__(self, request):
        print("Middleware")
        print(request.__dict__)
        # response = self.get_response(request)
        return self.get_response(request)