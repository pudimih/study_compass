from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.Topic import Topic

topic_bp = Blueprint("topics", __name__)

@topic_bp.route("/topics", methods=["GET"])
def get_topics():
    subject_id = request.args.get("subject_id")

    query = Topic.query
    if subject_id:
        query = query.filter_by(subject_id=subject_id)

    topics = query.all()
    return jsonify([t.to_dict() for t in topics]), 200


@topic_bp.route("/topics", methods=["POST"])
def create_topic():
    data = request.json

    if not data or "title" not in data or "subject_id" not in data:
        return jsonify({"error": "title and subject_id are required"}), 400

    topic = Topic(
        title=data["title"],
        status=data.get("status", "NOT_STUDIED"),
        subject_id=data["subject_id"]
    )

    db.session.add(topic)
    db.session.commit()

    return jsonify(topic.to_dict()), 201


@topic_bp.route("/topics/<int:topic_id>", methods=["PUT"])
def update_topic(topic_id):
    topic = Topic.query.get(topic_id)

    if not topic:
        return jsonify({"error": "Topic not found"}), 404

    data = request.json

    topic.title = data.get("title", topic.title)
    topic.status = data.get("status", topic.status)

    db.session.commit()
    return jsonify(topic.to_dict()), 200


@topic_bp.route("/topics/<int:topic_id>", methods=["DELETE"])
def delete_topic(topic_id):
    topic = Topic.query.get(topic_id)

    if not topic:
        return jsonify({"error": "Topic not found"}), 404

    db.session.delete(topic)
    db.session.commit()

    return "", 204
