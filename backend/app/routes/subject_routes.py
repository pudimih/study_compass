from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.Subject import Subject

subject_bd = Blueprint("subjects", __name__)

@subject_bd.route("/subjects", methods=["GET"])
def get_subjects():
    subjects = Subject.query.all()
    return jsonify([s.to_dict() for s in subjects]), 200

@subject_bd.route("/subjects", methods=["POST"])
def create_subject():
    data = request.json 
    
    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400
    
    subject = Subject(name=data["name"])
    db.session.add(subject)
    db.session.commit()
    
    return jsonify(subject.to_dict()), 201

@subject_bd.route("/subjects/<int:subject_id>", methods=["PUT"])
def update_subject(subject_id):
    subject = Subject.query.get(subject_id)

    if not subject:
        return jsonify({"error": "Subject not found"}), 404

    data = request.json
    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    subject.name = data["name"]
    db.session.commit()

    return jsonify(subject.to_dict()), 200

@subject_bd.route("/subjects/<int:subject_id>", methods=["DELETE"])
def delete_subject(subject_id):
    subject = Subject.query.get(subject_id)

    if not subject:
        return jsonify({"error": "Subject not found"}), 404

    db.session.delete(subject)
    db.session.commit()

    return "", 204
