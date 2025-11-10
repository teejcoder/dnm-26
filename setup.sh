#!/bin/bash

# 🚀 Denim Website - Setup Script
# Run this script to set up your development environment

echo "🎨 Setting up Denim Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo ""
    echo "   1. Start development server:"
    echo "      npm run dev"
    echo ""
    echo "   2. Open your browser to:"
    echo "      http://localhost:3000"
    echo ""
    echo "   3. Build for production:"
    echo "      npm run build"
    echo ""
    echo "📚 Check QUICKSTART.md for next steps"
    echo "📖 Read README.md for full documentation"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
