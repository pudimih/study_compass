from flask import Blueprint, jsonify
from app.models.Topic import Topic
from app.services.priotity_service import calculate_priority

priority_bp = Blueprint("priority", __name__)

@priority_bp.route("/study-now", methods=["GET"])
def study_now():
    topics = Topic.query.filter(Topic.status != "MASTERED").all()
    result = [topic.to_dict() for topic in topics]
    result.sort(key=lambda x: x["priority"], reverse=True)
    return jsonify(result), 200
