---
name: changelog
description: Update CHANGELOG.md in the project root with a dated entry summarizing the work about to be merged. Invoke manually before merging a branch. Bootstraps the file from git history if it does not exist.
disable-model-invocation: true
allowed-tools: Bash Read Edit Write
argument-hint: "[optional note to include]"
---

# Maintain CHANGELOG.md

Keep a `CHANGELOG.md` in the **project root**, organized as date-headed sections
(most recent first) with plain-language bullets. Run this **before merging** a
branch so the merge captures what changed.

## Steps

1. **Find the changelog.** Look for `CHANGELOG.md` in the project root.

2. **If `CHANGELOG.md` does NOT exist — bootstrap it from git history.**
   - Run: `git log --date=short --pretty=format:'%ad%x09%s'`
   - Group commits by date (the `%ad` field). Skip merge commits
     (`git log --no-merges …`) unless a merge is the only record of a change.
   - Write the file with a `# Changelog` title, a one-line description, then one
     `## YYYY-MM-DD` section per date (newest first), each with bullets that
     summarize the commits in **user-facing language** — not raw commit
     subjects. Collapse related commits into a single bullet where it reads
     better.

3. **If `CHANGELOG.md` exists — add/extend today's entry.**
   - Determine today's date with `date +%F` (do not guess).
   - Gather what is about to be merged, in this order of preference:
     - Commits on this branch not yet on the base branch:
       `git log --no-merges --date=short --pretty=format:'%ad%x09%s' main..HEAD`
       (substitute the actual base branch if it isn't `main`).
     - If that is empty, fall back to the working-tree changes:
       `git status --short` and `git diff --stat` (staged + unstaged).
   - If a `## <today>` heading already exists, append new bullets under it
     (avoid duplicating bullets already present). Otherwise insert a new
     `## <today>` section directly below the title/description, above the most
     recent existing date.

4. **Write good bullets.** Each bullet is one concrete, user- or
   developer-meaningful change ("Added Vitest test suite for the layout
   components", not "wip" or "fix"). Merge trivial/noise commits. If the user
   passed a note as an argument, fold it in.

5. **Confirm.** Show the user the new/updated section and stop — do **not**
   commit or merge automatically; the user drives that.

## Conventions

- Dates are `## YYYY-MM-DD`, newest first.
- Keep the `# Changelog` title and intro line at the top.
- Bullets are imperative/past-tense summaries, grouped logically, not a raw
  commit dump.
