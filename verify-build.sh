#!/bin/bash

echo "🔍 Verifying NawaEduTech Build Configuration..."
echo "================================================"
echo ""

# Check vite.config.ts
echo "✓ Checking vite.config.ts..."
if grep -q "base: '/nawaedutech/'" /workspace/nawaedutech/vite.config.ts; then
    echo "  ✅ Base path configured correctly"
else
    echo "  ❌ Base path NOT configured correctly"
    exit 1
fi

# Check App.tsx
echo "✓ Checking App.tsx..."
if grep -q 'basename="/nawaedutech"' /workspace/nawaedutech/src/App.tsx; then
    echo "  ✅ Router basename configured correctly"
else
    echo "  ❌ Router basename NOT configured correctly"
    exit 1
fi

# Check 404.html
echo "✓ Checking 404.html..."
if [ -f "/workspace/nawaedutech/public/404.html" ]; then
    echo "  ✅ 404.html exists"
else
    echo "  ❌ 404.html missing"
    exit 1
fi

# Check .nojekyll
echo "✓ Checking .nojekyll..."
if [ -f "/workspace/nawaedutech/public/.nojekyll" ]; then
    echo "  ✅ .nojekyll exists"
else
    echo "  ❌ .nojekyll missing"
    exit 1
fi

echo ""
echo "================================================"
echo "✅ All configurations are correct!"
echo "You can now run: pnpm run deploy"
echo "================================================"
