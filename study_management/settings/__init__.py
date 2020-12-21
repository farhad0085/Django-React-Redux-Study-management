from .base import *

if DEBUG == 'True':
    from .dev import *
else:
    from .prod import *