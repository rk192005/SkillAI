# 🔧 SkillAI Troubleshooting Guide

## Common Issues & Solutions

### **Issue 1: "Can't open the page" / 404 Error**

**❌ Problem:**
```
http://localhost:8081/multi-agent.html → 404 Not Found
```

**✅ Solutions:**

1. **Check if server is running:**
   ```bash
   ps aux | grep "http-server\|python"
   ```
   
2. **Start the server manually:**
   ```bash
   # Option A: Using Python (recommended)
   cd /Users/rajkumar/Desktop/AMD
   python3 -m http.server 8000
   
   # Option B: Using http-server (npm)
   npx http-server /Users/rajkumar/Desktop/AMD -p 8081
   ```

3. **Try these URLs:**
   - `http://localhost:8000/multi-agent.html` (if using Python)
   - `http://localhost:8081/multi-agent.html` (if using http-server)
   - `http://127.0.0.1:8000/multi-agent.html` (alternative)

4. **Check file exists:**
   ```bash
   ls -la /Users/rajkumar/Desktop/AMD/multi-agent.html
   ```

---

### **Issue 2: "Agents not loading" / Blank response**

**❌ Problem:**
```
Click "Generate Response" → Nothing happens or blank panels
```

**✅ Solutions:**

1. **Check browser console for errors:**
   - Press: `Cmd + Option + J` (macOS) or `F12`
   - Look for red ❌ errors
   - Report any `Uncaught ReferenceError` or `TypeError`

2. **Verify files are loading:**
   - In console, type: `console.log(typeof CoordinatorAgent)`
   - Should output: `"function"`
   - If it says `"undefined"`, agents.js didn't load

3. **Check file paths:**
   ```bash
   # Files MUST be in /Users/rajkumar/Desktop/AMD/
   ls -1 | grep -E "agents|database|multi-agent"
   ```
   
   Output should show:
   ```
   agents.js
   database.js
   multi-agent.html
   ```

4. **Hard refresh the page:**
   - Press: `Cmd + Shift + R` (macOS)
   - Clears browser cache and reloads everything

---

### **Issue 3: "Form validation errors"**

**❌ Problem:**
```
"Please select your engineering branch" keeps appearing
```

**✅ Solutions:**

1. **Ensure dropdown values match:**
   - Open browser console (`Cmd + Option + J`)
   - Type: `document.getElementById('branch').value`
   - Should return the selected branch name, not empty

2. **Check if select elements exist:**
   - In console: `document.getElementById('branch')`
   - Should show the dropdown element (not null)

3. **Reset the form:**
   - Refresh page with `Cmd + Shift + R`
   - Fill all required fields carefully

---

### **Issue 4: "Loading spinner never disappears"**

**❌ Problem:**
```
Click "Generate Response" → Loading spinner keeps spinning forever
```

**✅ Solutions:**

1. **Increase timeout wait:**
   - The system waits 1 second before showing responses
   - If agents.js is slow to load, increase to 2-3 seconds

2. **Check console for errors:**
   - `Cmd + Option + J` to open console
   - Look for any error messages after clicking button

3. **Try this in console:**
   ```javascript
   console.log('Coordinator:', typeof CoordinatorAgent);
   console.log('Database:', typeof SKILL_AI_DATABASE);
   coordinator = new CoordinatorAgent();
   coordinator.analyzeRequest('teach me data structures', {
       level: 'undergraduate',
       branch: 'CSE',
       semester: '2',
       proficiency: '3',
       careerGoal: 'Software Engineer'
   });
   ```

---

### **Issue 5: "Tabs not switching"**

**❌ Problem:**
```
Click on different agent tabs → Same content shows, tabs don't change
```

**✅ Solutions:**

1. **Check tab IDs in HTML:**
   - Each tab should have: `onclick="switchAgent('agentName')"`
   - Each panel should have: `id="agentNamePanel"`

2. **Test in console:**
   ```javascript
   // Click on tab manually
   document.getElementById('tutorPanel').classList.remove('hidden');
   document.getElementById('practicePanel').classList.add('hidden');
   ```

3. **Verify CSS is applied:**
   - In console, inspect element style:
   ```javascript
   const panel = document.getElementById('tutorPanel');
   console.log(panel.className);  // Should include 'hidden' or not
   ```

---

### **Issue 6: "CSS styling looks broken"**

**❌ Problem:**
```
Layout is misaligned, buttons look ugly, colors wrong
```

**✅ Solutions:**

1. **Hard refresh to clear CSS cache:**
   - Press: `Cmd + Shift + R`

2. **Check if styles.css is loaded:**
   - Open: DevTools → Sources tab
   - Look for `styles.css` in file list
   - Check for any 404 errors

3. **Verify CSS file exists:**
   ```bash
   ls -la /Users/rajkumar/Desktop/AMD/styles.css
   ```

4. **Inspect element colors:**
   - Right-click on element → Inspect
   - Look at Applied Styles section
   - Check if colors are being overridden

---

### **Issue 7: "JavaScript errors in console"**

**❌ Possible Errors & Fixes:**

**Error: `Uncaught ReferenceError: CoordinatorAgent is not defined`**
```
✓ Solution: agents.js didn't load
✓ Fix: Check file path, hard refresh, check console network tab
```

**Error: `Cannot read property 'response' of undefined`**
```
✓ Solution: coordinator.analyzeRequest() returned undefined
✓ Fix: Make sure all agents are initialized properly
```

**Error: `document.getElementById(...) is null`**
```
✓ Solution: HTML element doesn't exist or wrong ID
✓ Fix: Check HTML for id attributes, verify spelling
```

**Error: `Uncaught TypeError: display...Response is not a function`**
```
✓ Solution: Display function is missing or misspelled
✓ Fix: Check if all display functions are defined
```

---

## 📋 Diagnostic Checklist

**Step 1: Verify Files**
```bash
ls -lh /Users/rajkumar/Desktop/AMD/ | grep -E "\.js$|\.html$"
```
Should show:
- ✅ agents.js (48K)
- ✅ database.js (28K)
- ✅ multi-agent.html (37K)
- ✅ app.js (original, 31K)
- ✅ index.html (original, 25K)
- ✅ styles.css (original)

**Step 2: Verify Server**
```bash
netstat -tuln | grep 8000 || netstat -tuln | grep 8081
```
Should show listening port (8000 or 8081)

**Step 3: Test Original SkillAI**
```
http://localhost:8000/index.html
or
http://localhost:8081/index.html
```
Should work without issues

**Step 4: Open Console & Check**
- Press `Cmd + Option + J`
- Type: `typeof CoordinatorAgent`
- Should say: `"function"` (not "undefined")

**Step 5: Test Agent Creation**
```javascript
coordinator = new CoordinatorAgent();
response = coordinator.analyzeRequest('teach binary trees', {
    level: 'undergraduate',
    branch: 'CSE',
    semester: '2',
    proficiency: '3',
    careerGoal: 'Software Engineer'
});
console.log(response);
```
Should show response object with intent and agents

---

## 🆘 Debug Commands

**Run these in browser console:**

```javascript
// Check all loaded components
console.log('=== DIAGNOSTICS ===');
console.log('Coordinator:', typeof CoordinatorAgent);
console.log('Database:', typeof SKILL_AI_DATABASE);
console.log('HTML elements:');
console.log('- studentQuery:', document.getElementById('studentQuery') !== null);
console.log('- branch:', document.getElementById('branch') !== null);
console.log('- coordinatorPanel:', document.getElementById('coordinatorPanel') !== null);

// Try creating coordinator
try {
    const c = new CoordinatorAgent();
    console.log('✅ Coordinator created successfully');
} catch (e) {
    console.log('❌ Error creating coordinator:', e.message);
}

// Try analyzing request
try {
    const resp = coordinator.analyzeRequest('teach me', {
        level: 'undergraduate',
        branch: 'CSE',
        semester: '1',
        proficiency: '2',
        careerGoal: 'Engineer'
    });
    console.log('✅ Analysis successful:', resp.intent);
} catch (e) {
    console.log('❌ Error analyzing:', e.message);
}
```

---

## 📞 Getting Help

**Before reporting issue, gather:**
1. Browser type and version (Chrome, Firefox, Safari)
2. Screenshot of error (if visible)
3. Console error messages (Cmd + Option + J)
4. Steps to reproduce the issue
5. Which file(s) are involved

**Check these first:**
- [ ] Server is running on correct port
- [ ] Files exist at correct paths
- [ ] Hard refresh done (Cmd + Shift + R)
- [ ] Console checked for errors
- [ ] Original index.html still works
- [ ] Network tab shows files loading

---

## ✅ Verification Steps

**Quick Fix - Try These in Order:**

1. **Refresh page:**
   ```
   Cmd + Shift + R (hard refresh)
   ```

2. **Restart server:**
   ```bash
   # Kill current server
   pkill -f "http.server\|http-server"
   
   # Start fresh
   cd /Users/rajkumar/Desktop/AMD
   python3 -m http.server 8000 &
   ```

3. **Check console:**
   ```
   Cmd + Option + J → Check for red errors
   ```

4. **Try demo URL:**
   ```
   http://localhost:8000/index.html (original SkillAI)
   ```

5. **Clear browser cache:**
   - Chrome: Cmd + Shift + Delete → Select "All time" → Delete

6. **Try different browser:**
   - Safari, Firefox, Chromium

---

## 🚀 Advanced Troubleshooting

**If still having issues, run these commands:**

```bash
# Check file permissions
chmod 644 /Users/rajkumar/Desktop/AMD/*.js
chmod 644 /Users/rajkumar/Desktop/AMD/*.html

# Check file integrity
wc -l /Users/rajkumar/Desktop/AMD/*.js
# Should show ~1300 lines for agents.js, ~900 for database.js

# Check for syntax errors
node -c /Users/rajkumar/Desktop/AMD/agents.js
node -c /Users/rajkumar/Desktop/AMD/database.js

# Test server response
curl -I http://localhost:8000/multi-agent.html
# Should show: HTTP/1.0 200 OK
```

---

## 📝 Last Resort - Full Reset

If nothing works:

```bash
# Kill all servers
pkill -f "http.server\|http-server"

# Navigate to directory
cd /Users/rajkumar/Desktop/AMD

# Clear browser cache and cookies
# Chrome: Cmd + Shift + Delete

# Start fresh server with Python
python3 -m http.server 8000

# Open in new browser tab
# http://localhost:8000/multi-agent.html
```

---

**Still stuck?** Make sure all these files exist:
- ✅ `/Users/rajkumar/Desktop/AMD/multi-agent.html`
- ✅ `/Users/rajkumar/Desktop/AMD/agents.js`
- ✅ `/Users/rajkumar/Desktop/AMD/database.js`
- ✅ Server running on port 8000 or 8081

**Version Info:**
- Created: March 4, 2026
- Team: APEIRON
- Event: AMD Slingshot Hackathon 2026
