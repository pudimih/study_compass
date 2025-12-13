from flask import Flask
from .config import Config
from .extensions import db, cors
from .models import Subject
from .models import Topic
from app.routes.topic_routes import topic_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    cors.init_app(app)
    
    from app.routes.subject_routes import subject_bd
    app.register_blueprint(subject_bd)
    
    from app.routes.topic_routes import topic_bp
    app.register_blueprint(topic_bp)
    
    from app.routes.priotity_routes import priority_bp
    app.register_blueprint(priority_bp)


    return app
