export const verifySkillExists = (groupSkill: string[], skillValue: string) => {
    if (groupSkill.includes(skillValue)) return true;

    return false;
}