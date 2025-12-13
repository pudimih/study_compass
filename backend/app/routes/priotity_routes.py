from flask import Blueprint, jsonify
from app.models.Topic import Topic
from app.services.priotity_service import calculate_priority

priority_bp = Blueprint("priority", __name__)

@priority_bp.route("/study-now", methods=["GET"])
def study_now():
    topics = Topic.query.all()
    
    result = []
    for topic in topics:
        topic_dict = topic.to_dict()
        topic_dict["priority"] = calculate_priority(topic.status)
        result.append(topic_dict)
        
        result.sort(key=lambda x: x["priority"], reverse=True)
        
        return jsonify(result), 200