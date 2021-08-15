export const verifySkillExists = (groupSkill: string[], skillValue: string) => {
    if (groupSkill.includes(skillValue)) return false;

    return true;
}