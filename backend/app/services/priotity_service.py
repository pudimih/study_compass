def calculate_priority(status):
    priorities = {
        "NOT_STUDIED": 2,
        "IN_PROGRESS": 1,
        "MASTERED": 3
    }
    return priorities.get(status, 0)