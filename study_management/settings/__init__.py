from .base import *

if ENVIRONMENT == "production":
    from .prod import *
else:
    from .dev import *